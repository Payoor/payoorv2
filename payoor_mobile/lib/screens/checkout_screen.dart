import 'package:flutter/material.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';

import '../utils/api.dart';

class CheckoutScreen extends StatefulWidget {
  final String authToken;

  const CheckoutScreen({super.key, required this.authToken});

  @override
  State<CheckoutScreen> createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
  final List<Map<String, dynamic>> checkoutSections = [
    {
      'type': 'text',
      'header': 'Delivery Address',
      'required': true,
      'content': '10 Samuel Edosa St, Ikosi Ketu, Lagos 105102, Lagos, Nigeria',
      'buttonLabel': 'Change',
      'onTap': (BuildContext context) {},
    },
    {
      'type': 'text',
      'header': 'Phone Number',
      'required': true,
      'content': '09067873118',
      'buttonLabel': 'Add Phone Number',
      'onTap': (BuildContext context) {},
    },
    {
      'type': 'dates',
      'header': 'Delivery Date',
      'required': true,
      'onTap': (BuildContext context) {},
    },
    {
      'type': 'text',
      'header': 'Delivery Instruction',
      'required': false,
      'content': 'None',
      'buttonLabel': 'Specify',
      'onTap': (BuildContext context) {},
    },
    {
      'type': 'text',
      'header': 'Promo Code or Coupon',
      'required': false,
      'content': 'None',
      'buttonLabel': 'Use Promo Code',
      'onTap': (BuildContext context) {},
    },
  ];

  final List<Map<String, dynamic>> deliveryDates = [
    {'day': 'Friday', 'number': '26', 'month': 'June', 'selected': false},
    {'day': 'Saturday', 'number': '27', 'month': 'June', 'selected': false},
    {'day': 'Sunday', 'number': '28', 'month': 'June', 'selected': true},
    {'day': 'Monday', 'number': '29', 'month': 'June', 'selected': false},
    {'day': 'Tuesday', 'number': '30', 'month': 'June', 'selected': false},
    {'day': 'Wednesday', 'number': '1', 'month': 'July', 'selected': false},
    {'day': 'Thursday', 'number': '2', 'month': 'July', 'selected': false},
  ];

  BoxDecoration renderBorder({
    Color backgroundColor = Colors.white,
    double radius = 12,
    double borderWidth = 1.5,
  }) {
    return BoxDecoration(
      color: backgroundColor,
      border: Border.all(color: const Color(0xFF249B48), width: borderWidth),
      borderRadius: BorderRadius.circular(radius),
    );
  }

  BoxDecoration buttonStyle({
    Color backgroundColor = const Color(0xFF249B48),
    double radius = 48,
  }) {
    return BoxDecoration(
      color: backgroundColor,
      borderRadius: BorderRadius.circular(radius),
    );
  }

  EdgeInsets buttonPadding({double horizontal = 15, double vertical = 6}) {
    return EdgeInsets.symmetric(horizontal: horizontal, vertical: vertical);
  }

  TextStyle buttonTextStyle({double fontSize = 13}) {
    return TextStyle(
      color: Colors.white,
      fontSize: fontSize,
      fontWeight: FontWeight.w500,
    );
  }

  TextStyle sectionHeader({
    Color color = Colors.black87,
    double fontSize = 12,
  }) {
    return TextStyle(
      color: color,
      fontSize: fontSize,
      fontWeight: FontWeight.w700,
      letterSpacing: 0.2,
    );
  }

  TextStyle sectionContent({Color color = Colors.black, double fontSize = 13}) {
    return TextStyle(
      color: color,
      fontSize: fontSize,
      fontWeight: FontWeight.w400,
      height: 1.6,
    );
  }

  @override
  Widget build(BuildContext context) {
    return MenuLayout(
      page: Scaffold(
        backgroundColor: const Color(0xFFFFFFFF),
        body: SafeArea(
          child: AppLayout(
            child: Column(
              children: [
                const ChatHeader(green: true, topic: 'Checkout'),
                const SizedBox(height: 20),

                Expanded(
                  child: ListView(
                    children: checkoutSections.map((section) {
                      if (section['type'] == 'dates') {
                        return Column(
                          children: [
                            Container(
                              width: double.infinity,
                              decoration: renderBorder(),
                              child: Padding(
                                padding: const EdgeInsets.all(10),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      children: [
                                        Text(
                                          section['header'],
                                          style: sectionHeader(),
                                        ),
                                        if (section['required'] == true)
                                          const Text(
                                            '*',
                                            style: TextStyle(color: Colors.red),
                                          ),
                                      ],
                                    ),

                                    const SizedBox(height: 12),

                                    SizedBox(
                                      height: 86,
                                      child: ListView.separated(
                                        scrollDirection: Axis.horizontal,
                                        clipBehavior: Clip.none,
                                        itemCount: deliveryDates.length,
                                        separatorBuilder: (context, index) =>
                                            const SizedBox(width: 10),
                                        itemBuilder: (context, index) {
                                          final date = deliveryDates[index];
                                          final bool selected =
                                              date['selected'] == true;

                                          return GestureDetector(
                                            onTap: () {
                                              print(
                                                'Selected date: ${date['day']} ${date['number']}',
                                              );
                                            },
                                            child: Container(
                                              width: 82,
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                    horizontal: 8,
                                                    vertical: 6,
                                                  ),
                                              decoration: BoxDecoration(
                                                color: selected
                                                    ? const Color(0xFF249B48)
                                                    : const Color(
                                                        0xFF249B48,
                                                      ).withOpacity(0.08),
                                                border: Border.all(
                                                  color: const Color(
                                                    0xFF249B48,
                                                  ),
                                                  width: 1.2,
                                                ),
                                                borderRadius:
                                                    BorderRadius.circular(14),
                                              ),
                                              child: Column(
                                                mainAxisAlignment:
                                                    MainAxisAlignment.center,
                                                children: [
                                                  Text(
                                                    date['day'],
                                                    maxLines: 1,
                                                    overflow:
                                                        TextOverflow.ellipsis,
                                                    style: TextStyle(
                                                      color: selected
                                                          ? Colors.white
                                                          : const Color(
                                                              0xFF249B48,
                                                            ),
                                                      fontSize: 10,
                                                      fontWeight:
                                                          FontWeight.w600,
                                                      height: 1,
                                                    ),
                                                  ),
                                                  const SizedBox(height: 4),
                                                  Text(
                                                    date['number'],
                                                    style: TextStyle(
                                                      color: selected
                                                          ? Colors.white
                                                          : const Color(
                                                              0xFF249B48,
                                                            ),
                                                      fontSize: 22,
                                                      fontWeight:
                                                          FontWeight.w800,
                                                      height: 1,
                                                    ),
                                                  ),
                                                  const SizedBox(height: 3),
                                                  Text(
                                                    date['month'],
                                                    style: TextStyle(
                                                      color: selected
                                                          ? Colors.white
                                                          : const Color(
                                                              0xFF249B48,
                                                            ),
                                                      fontSize: 10,
                                                      fontWeight:
                                                          FontWeight.w500,
                                                      height: 1,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          );
                                        },
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(height: 15),
                          ],
                        );
                      }

                      return Column(
                        children: [
                          Container(
                            decoration: renderBorder(),
                            child: Padding(
                              padding: const EdgeInsets.all(10),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      Text(
                                        section['header'],
                                        style: sectionHeader(),
                                      ),
                                      if (section['required'] == true)
                                        const Text(
                                          ' *',
                                          style: TextStyle(color: Colors.red),
                                        ),
                                    ],
                                  ),

                                  const SizedBox(height: 5),

                                  Text(
                                    section['content'],
                                    style: sectionContent(),
                                  ),

                                  const SizedBox(height: 10),

                                  GestureDetector(
                                    onTap: () => section['onTap'](context),
                                    child: Container(
                                      decoration: buttonStyle(),
                                      padding: buttonPadding(),
                                      child: Text(
                                        section['buttonLabel'],
                                        style: buttonTextStyle(),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(height: 15),
                        ],
                      );
                    }).toList(),
                  ),
                ),

                const SizedBox(height: 16),

                Column(
                  children: const [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          'Sub-total',
                          style: TextStyle(
                            color: Color(0xFF249B48),
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        Text(
                          '₦52941',
                          style: TextStyle(
                            color: Colors.black87,
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),

                    SizedBox(height: 10),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          'Delivery Fee',
                          style: TextStyle(
                            color: Color(0xFF249B48),
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        Text(
                          '₦5000',
                          style: TextStyle(
                            color: Colors.black87,
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),

                    SizedBox(height: 10),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          'Final Total',
                          style: TextStyle(
                            color: Color(0xFF249B48),
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        Text(
                          '₦57941',
                          style: TextStyle(
                            color: Colors.black87,
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),

                SizedBox(height: 16),

                GestureDetector(
                  onTap: () {},
                  child: Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                      color: const Color(0xFF249B48),
                      border: Border.all(
                        color: const Color(0xFF249B48),
                        width: 1.5,
                      ),
                      borderRadius: BorderRadius.circular(12),
                    ),

                    child: Padding(
                      padding: EdgeInsets.symmetric(
                        vertical: 14,
                        horizontal: 16,
                      ),

                      child: Center(
                        child: Text(
                          'Confirm Order',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 16,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
