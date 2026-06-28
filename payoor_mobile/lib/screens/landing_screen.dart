import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';
import '../widgets/google_auth_button.dart';

class LandingScreen extends StatefulWidget {
  const LandingScreen({super.key});

  @override
  State<LandingScreen> createState() => _LandingScreenState();
}

class _LandingScreenState extends State<LandingScreen> {
  late TextEditingController _controller;
  bool animateIn = false;
  bool cloudAnimateIn = false;

  @override
  void initState() {
    super.initState();

    _controller = TextEditingController();

    _controller.addListener(() {
      setState(() {});
    });

    Future.microtask(() {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (!mounted) return;

        setState(() {
          animateIn = true;
        });
      });
    });

    Future.delayed(const Duration(milliseconds: 300), () {
      if (!mounted) return;

      setState(() {
        cloudAnimateIn = true;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    final size = MediaQuery.sizeOf(context);
    final w = size.width;
    final h = size.height;

    final inputSize = MediaQuery.sizeOf(context);
    final inputW = size.width;
    final inputH = size.height;

    return MenuLayout(
      page: Scaffold(
        backgroundColor: Color(0xFFB6EDF2),
        resizeToAvoidBottomInset: true,
        body: Stack(
          children: [
            Stack(
              children: [
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: Column(
                    children: [
                      SizedBox(
                        width: double.infinity,
                        height: h * 0.4,
                        child: Stack(
                          alignment: Alignment.center,
                          children: [
                            AnimatedPositioned(
                              duration: const Duration(milliseconds: 800),
                              curve: Curves.easeOut,
                              right: animateIn ? w * 0.18 : -w * 1.2,
                              top: h * 0.12,
                              child: Transform.scale(
                                scale: 1.6,
                                child: SvgPicture.asset(
                                  'assets/svgs/handgiver.svg',
                                  width: w * 0.75,
                                ),
                              ),
                            ),

                            AnimatedPositioned(
                              duration: const Duration(milliseconds: 800),
                              curve: Curves.easeOut,
                              left: animateIn ? w * 0.025 : -w * 1.2,
                              top: h * 0.08,
                              child: Transform.scale(
                                scale: 1.2,
                                child: SvgPicture.asset(
                                  'assets/svgs/handreceiver.svg',
                                  width: w * 0.75,
                                  height: w * 0.75,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),

                      AnimatedSlide(
                        duration: const Duration(milliseconds: 1000),
                        curve: Curves.easeOutCubic,
                        offset: cloudAnimateIn
                            ? Offset.zero
                            : const Offset(0, 2), // start below
                        child: Image.asset(
                          'assets/images/greencloud.png',
                          width: double.infinity,
                          height: h * 0.2,
                          fit: BoxFit.fill,
                        ),
                      ),

                      /*Image.asset(
                  'assets/images/greencloud.png',
                  width: double.infinity,
                  height: h * 0.2,
                  fit: BoxFit.fill,
                ),*/
                    ],
                  ),
                ),

                Positioned.fill(
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 100,
                  child: Container(
                    color: Colors.transparent, //(0xFFB6EDF2),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        AppLayout(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              ChatHeader(green: true),
                              SizedBox(height: 40),

                              Text(
                                "Hi, I'm Payoor",
                                style: TextStyle(
                                  color: Colors.black87,
                                  fontSize: 30,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                              Text(
                                "Make a Grocery List & Leave",
                                style: TextStyle(
                                  color: Colors.black87,
                                  fontSize: 14,
                                  fontWeight: FontWeight.w400,
                                ),
                              ),
                              Text(
                                "The Rest to me",
                                style: TextStyle(
                                  color: Colors.black87,
                                  fontSize: 14,
                                  fontWeight: FontWeight.w400,
                                ),
                              ),

                              SizedBox(height: 20),

                              Container(
                                width: double.infinity,
                                height: inputH * 0.17, // reduced height
                                padding: EdgeInsets.only(
                                  top: inputH * 0.018,
                                  left: inputW * 0.025,
                                  right: inputW * 0.025,
                                  bottom: inputH * 0.01,
                                ),
                                decoration: BoxDecoration(
                                  color: const Color(0xFFFFFFFF),
                                  borderRadius: BorderRadius.circular(w * 0.05),
                                  border: Border.all(
                                    color: const Color(0xFF249B48),
                                    width: 1,
                                  ),
                                ),
                                child: Column(
                                  children: [
                                    Expanded(
                                      child: TextField(
                                        controller: _controller,
                                        onChanged: (value) {},
                                        minLines: 2,
                                        maxLines: 5,
                                        keyboardType: TextInputType.multiline,
                                        style: const TextStyle(
                                          color: Colors.black87,
                                        ),
                                        decoration: const InputDecoration(
                                          hintText: 'Create a list',
                                          hintStyle: TextStyle(
                                            color: Colors.red,
                                          ),
                                          border: InputBorder.none,
                                          isCollapsed: true,
                                        ),
                                      ),
                                    ),

                                    Container(
                                      width: double.infinity,
                                      decoration: BoxDecoration(
                                        color: const Color(0xFF249B48),
                                        borderRadius: BorderRadius.circular(
                                          w * 0.08,
                                        ),
                                      ),
                                      child: Padding(
                                        padding: EdgeInsets.all(h * 0.01),
                                        child: const Center(
                                          child: Text(
                                            'Get started',
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 14,
                                              fontWeight: FontWeight.w700,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),

                              SizedBox(height: 10),

                              const GoogleAuthButton(),

                              SizedBox(height: 10),

                              Container(
                                width: double.infinity,
                                decoration: const BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.all(
                                    Radius.circular(5),
                                  ),
                                ),
                                child: Padding(
                                  padding: EdgeInsets.all(10),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Text(
                                        "Continue with Email",
                                        style: TextStyle(
                                          color: Colors.black87,
                                          fontSize: 14,
                                          fontWeight: FontWeight.w500,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),

            //Positioned(child: SideNavi()),
          ],
        ),
      ),
    );
  }
}
