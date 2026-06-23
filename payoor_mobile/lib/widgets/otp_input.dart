import 'dart:async';
import 'dart:ui';
import 'package:flutter/material.dart';

import '../utils/api.dart';

import '../models/user.dart';

class OtpInput extends StatefulWidget {
  final ValueChanged<User>? onContinue;
  String? emailValue;

  OtpInput({super.key, this.onContinue, this.emailValue});

  @override
  State<OtpInput> createState() => _OtpInputState();
}

class _OtpInputState extends State<OtpInput> {
  final List<FocusNode> focusNodes = List.generate(6, (_) => FocusNode());
  final List<TextEditingController> controllers = List.generate(
    6,
    (_) => TextEditingController(),
  );
  String? otpString;
  bool isLoading = false;

  Timer? resendTimer;
  int resendSecondsLeft = 120;

  bool get canResendOtp => resendSecondsLeft == 0 && !isLoading;

  void startResendTimer() {
    resendTimer?.cancel();

    setState(() {
      resendSecondsLeft = 120;
    });

    resendTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (!mounted) {
        timer.cancel();
        return;
      }

      if (resendSecondsLeft <= 1) {
        timer.cancel();

        setState(() {
          resendSecondsLeft = 0;
        });
      } else {
        setState(() {
          resendSecondsLeft--;
        });
      }
    });
  }

  String formatTimer(int seconds) {
    final minutes = seconds ~/ 60;
    final remainingSeconds = seconds % 60;

    return '$minutes:${remainingSeconds.toString().padLeft(2, '0')}';
  }

  @override
  void initState() {
    super.initState();

    startResendTimer();

    for (final node in focusNodes) {
      node.addListener(() {
        setState(() {});
      });
    }

    for (final controller in controllers) {
      controller.addListener(() {
        setState(() {});
      });
    }
  }

  @override
  void dispose() {
    resendTimer?.cancel();

    for (final node in focusNodes) {
      node.dispose();
    }

    for (final controller in controllers) {
      controller.dispose();
    }

    super.dispose();
  }

  Future<Map<String, dynamic>> verifyOtp() async {
    var data = await requestServerPost(
      '/shopper/auth/verifyotp',
      body: {'submittedOtp': otpString},
    );

    return data;
  }

  void clearInputs() {
    for (final controller in controllers) {
      controller.clear();
    }

    setState(() {
      otpString = '';
    });

    focusNodes[0].requestFocus();
  }

  Future<void> submitOtp() async {
    try {
      setState(() {
        isLoading = true;
      });

      Map<String, dynamic> data = await verifyOtp();

      if (data['success'] && data['user'] != null) {
        final user = User.fromJson(data['user']);

        widget.onContinue?.call(user);

        /*if (widget.onContinue != null) {
          widget.onContinue!(data['user']);
        }*/
      }
    } catch (e) {
      print('Error $e');
      clearInputs();
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  Future<Map<String, dynamic>> getOtp() async {
    var data = await requestServerPost(
      '/shopper/auth/mail',
      body: {'identifier': widget.emailValue},
    );

    return data;
  }

  Future<void> resendOtp() async {
    if (!canResendOtp) return;

    try {
      setState(() {
        isLoading = true;
      });

      Map<String, dynamic> data = await getOtp();

      //print(data);

      clearInputs();
      startResendTimer();
    } catch (e) {
      print('Error $e');
      clearInputs();
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    TextStyle renderTextStyle({Color? textColor, double? fontSize}) {
      return TextStyle(
        color: textColor ?? Colors.black87,
        fontSize: fontSize ?? 29,
        fontWeight: FontWeight.w400,
      );
    }

    return Column(
      children: [
        Stack(
          alignment: Alignment.center,
          children: [
            ImageFiltered(
              imageFilter: ImageFilter.blur(
                sigmaX: isLoading ? 2 : 0,
                sigmaY: isLoading ? 2 : 0,
              ),
              child: IgnorePointer(
                ignoring: isLoading,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(6, (index) {
                    final isFocused = focusNodes[index].hasFocus;
                    final hasValue = controllers[index].text.isNotEmpty;

                    void onChanged(String value) {
                      if (value.isNotEmpty && index < 5) {
                        focusNodes[index + 1].requestFocus();
                      }

                      if (value.isEmpty && index > 0) {
                        focusNodes[index - 1].requestFocus();
                      }

                      setState(() {
                        otpString = controllers
                            .map((controller) => controller.text.trim())
                            .join();
                      });

                      //print('OTP Length: ${otpString?.length}');
                      //print('OTP String: $otpString');

                      if (otpString?.length == 6) {
                        //print('submit the otp');
                        submitOtp();
                      }
                    }

                    return Padding(
                      padding: EdgeInsets.only(right: index == 5 ? 0 : 10),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 200),
                        curve: Curves.easeOutCubic,
                        width: 48,
                        height: 56,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: isFocused || hasValue
                                ? const Color(0xFF249B48)
                                : Colors.transparent,
                            width: 2,
                          ),
                        ),
                        child: TextField(
                          enabled: !isLoading,
                          controller: controllers[index],
                          onChanged: onChanged,
                          focusNode: focusNodes[index],
                          textAlign: TextAlign.center,
                          maxLength: 1,
                          keyboardType: TextInputType.number,
                          style: const TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w700,
                          ),
                          decoration: const InputDecoration(
                            counterText: '',
                            border: InputBorder.none,
                          ),
                        ),
                      ),
                    );
                  }),
                ),
              ),
            ),

            if (isLoading)
              const SizedBox(
                width: 22,
                height: 22,
                child: CircularProgressIndicator(
                  strokeWidth: 2.2,
                  color: Color(0xFF249B48),
                ),
              ),
          ],
        ),
        SizedBox(height: 5),
        GestureDetector(
          onTap: canResendOtp ? resendOtp : null,
          child: ImageFiltered(
            imageFilter: ImageFilter.blur(
              sigmaX: isLoading ? 2 : 0,
              sigmaY: isLoading ? 2 : 0,
            ),
            child: IgnorePointer(
              ignoring: isLoading || !canResendOtp,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Resend Otp',
                    style: renderTextStyle(
                      fontSize: 15,
                      textColor: canResendOtp
                          ? const Color(0xFF249B48)
                          : Colors.black38,
                    ).copyWith(decoration: TextDecoration.underline),
                  ),
                  const SizedBox(width: 5),
                  Text(
                    resendSecondsLeft == 0
                        ? ''
                        : formatTimer(resendSecondsLeft),
                    style: renderTextStyle(fontSize: 10),
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }
}
