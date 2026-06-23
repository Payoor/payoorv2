import 'package:flutter/material.dart';

import '../utils/api.dart';

class AuthInput extends StatefulWidget {
  final String hintText;
  final TextEditingController? controller;
  final ValueChanged<String>? onChanged;
  final ValueChanged<String>? onContinue; //ValueChanged<T> is just a Flutter typedef (alias) for a function that takes one value and returns nothing.
  final String? currentAuthCheckpoint;

  const AuthInput({
    super.key,
    this.hintText = 'Enter your email',
    this.controller,
    this.onChanged,
    this.onContinue,
    this.currentAuthCheckpoint,
  });

  @override
  State<AuthInput> createState() => _AuthInputState();
}

class _AuthInputState extends State<AuthInput> {
  late TextEditingController _controller;

  String get inputValue => _controller.text.trim();

  bool get hasText => _controller.text.trim().isNotEmpty;

  bool get isValid => isValidEmail(_controller.text);

  bool isLoading = false;

  bool isValidEmail(String email) {
    final regex = RegExp(
      r'^[a-zA-Z0-9.!#$%&'
      '*+/=?^_`{|}~-]+'
      r'@[a-zA-Z0-9-]+'
      r'(?:\.[a-zA-Z0-9-]+)+$',
    );

    return regex.hasMatch(email.trim());
  }

  void onChanged(String value) {
    if (!isValid) {
      return;
    }

    if (widget.onChanged != null) {
      widget.onChanged!(value);
    }
  }

  Future<void> submitInput() async {
    try {
      if (widget.currentAuthCheckpoint == 'email') {
        setState(() {
          isLoading = true;
        });

        Map<String, dynamic> data = await getOtp();

        if (data['otpSent']) {
          if (widget.onContinue != null) {
            widget.onContinue!(inputValue);
          }
        }
      }
    } catch (e) {
      print('Error $e');
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  Future<Map<String, dynamic>> getOtp() async {
    var data = await requestServerPost(
      '/shopper/auth/mail',
      body: {'identifier': inputValue},
    );

    return data;
  }

  @override
  void initState() {
    super.initState();

    _controller = widget.controller ?? TextEditingController();

    _controller.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(20, 16, 20, 16),
      decoration: const BoxDecoration(
        color: Color(0xFF333333),
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(30),
          topRight: Radius.circular(30),
        ),
      ),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: _controller,
              onChanged: onChanged,
              keyboardType: TextInputType.emailAddress,
              style: const TextStyle(color: Colors.white, fontSize: 16),
              decoration: InputDecoration(
                hintText: widget.hintText,
                hintStyle: const TextStyle(color: Colors.white),
                border: InputBorder.none,
                isCollapsed: true,
              ),
            ),
          ),

          AnimatedSlide(
            duration: const Duration(milliseconds: 250),
            curve: Curves.easeOutCubic,
            offset: hasText && isValid ? Offset.zero : const Offset(0.5, 0),
            child: AnimatedOpacity(
              duration: const Duration(milliseconds: 200),
              opacity: hasText && isValid ? 1 : 0,
              child: IgnorePointer(
                ignoring: !hasText,
                child: GestureDetector(
                  onTap: () {
                    if (isValid) {
                      submitInput();
                    }
                  },
                  child: Container(
                    width: 42,
                    height: 42,
                    decoration: BoxDecoration(
                      color: isLoading
                          ? const Color(0xFF7BCB91)
                          : const Color(0xFF249B48),
                      borderRadius: BorderRadius.circular(100),
                    ),
                    child: Center(
                      child: isLoading
                          ? const SizedBox(
                              width: 20,
                              height: 20,
                              child: CircularProgressIndicator(
                                strokeWidth: 2.2,
                                color: Colors.white,
                              ),
                            )
                          : const Icon(
                              Icons.arrow_upward_rounded,
                              color: Colors.white,
                              size: 20,
                            ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
