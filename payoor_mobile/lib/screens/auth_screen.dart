import 'package:flutter/material.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/auth_input.dart';
import '../widgets/otp_input.dart';
import '../widgets/side_navi.dart';

import '../models/user.dart';

import '../db/local_db.dart';

import '../repositories/user_repository.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  String? otpValue;
  String? emailValue;
  String? nameValue;
  String? phoneNumberValue;
  String? currentInputValue;
  User? user;

  final String? authMethod = 'email'; //can be google or email add apple later

  final List<String> authCheckPoints = [
    'email',
    'otpinput',
    'phonenumber',
    'name',
  ];

  String? currentAuthCheckpoint; //= 'otpinput';

  final userRepository = UserRepository();

  @override
  void initState() {
    super.initState();

    loadUser();

    setState(() {
      currentAuthCheckpoint = authCheckPoints[0];

      //development
      //emailValue = 'nerdyemmanuel@gmail.com';
    });
  }

  Future<void> loadUser() async {
    final userAvailable = await userRepository.getUser();

    if (!mounted)
      return; //mounted is a property that already exists on every State object in Flutter.

    setState(() {
      user = userAvailable;
    });
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

    return Scaffold(
      backgroundColor: const Color(0xFFB6EDF2),
      resizeToAvoidBottomInset: true,
      body: Stack(
        children: [
          SafeArea(
            child: Column(
              children: [
                Expanded(
                  child: AppLayout(
                    child: Column(
                      children: [
                        ChatHeader(green: true),

                        const Spacer(),

                        if (currentAuthCheckpoint == authCheckPoints[0])
                          Container(
                            width: double.infinity,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  "What's your email Address",
                                  style: renderTextStyle(),
                                ),
                                SizedBox(height: 8),
                                Text(
                                  "We'll send an otp to",
                                  style: renderTextStyle(),
                                ),
                                SizedBox(height: 4),
                                Text(
                                  "authenticate it.",
                                  style: renderTextStyle(),
                                ),
                              ],
                            ),
                          ),

                        if (currentAuthCheckpoint == authCheckPoints[1] &&
                            emailValue != null &&
                            user == null)
                          Container(
                            width: double.infinity,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text("We just sent", style: renderTextStyle()),
                                Text(
                                  emailValue!,
                                  style: renderTextStyle(
                                    textColor: Color(0xFF249B48),
                                  ),
                                ),
                                Text(
                                  "an otp. Kindly provide it to confirm email",
                                  style: renderTextStyle(),
                                ),
                                Text(
                                  "(Please check spam if it doesn’t appear in your inbox).",
                                  style: renderTextStyle(),
                                ),

                                OtpInput(
                                  emailValue: emailValue,
                                  onContinue: (value) async {
                                    setState(() {
                                      user = value;
                                    });

                                    await userRepository.saveUser(value);
                                  },
                                ),
                              ],
                            ),
                          ),

                        const Spacer(),
                      ],
                    ),
                  ),
                ),

                AuthInput(
                  hintText: 'Enter your email address...',
                  onChanged: (value) {
                    print(value);
                    /*if (currentAuthCheckpoint == authCheckPoints[0] &&
                    authMethod == 'email') {
                  setState(() {
                    emailValue = value;
                    currentInputValue = value;
                  });
                }*/
                  },
                  onContinue: (value) {
                    if (currentAuthCheckpoint == authCheckPoints[0] &&
                        authMethod == 'email') {
                      setState(() {
                        emailValue = value;
                        currentAuthCheckpoint = authCheckPoints[1];
                      });
                    }
                  },
                  currentAuthCheckpoint: currentAuthCheckpoint,
                ),
              ],
            ),
          ),

          Positioned(child: SideNavi()),
        ],
      ),
    );
  }
}
