import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';

import '../screens/useraddress_screen.dart';
import '../screens/userphonenumber_screen.dart';
import '../screens/deliveryinstruction_screen.dart';
import '../screens/promocode_screen.dart';
import '../screens/order_preview_screen.dart';

import '../providers/checkout_provider.dart';

class CheckoutScreen extends StatefulWidget {
  final String authToken;

  const CheckoutScreen({super.key, required this.authToken});

  @override
  State<CheckoutScreen> createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
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

  String money(dynamic value) {
    final amount = double.tryParse(value?.toString() ?? '0') ?? 0;
    return '₦${amount.toStringAsFixed(0)}';
  }

  @override
  Widget build(BuildContext context) {
    final checkoutProvider = context.watch<CheckoutProvider>();
    final checkoutData = checkoutProvider.checkoutData ?? {};
    final checkout = checkoutData['checkout'] ?? {};

    final deliveryAddress = (checkout['delivery_address'] ?? '').toString();
    final phoneNumber = (checkout['phone_number'] ?? '').toString();
    final deliveryInstruction = (checkout['delivery_instruction'] ?? '')
        .toString();
    final promoCode = (checkout['promo_code'] ?? '').toString();

    final selectedDeliveryDate =
        checkout['delivery_date'] is Map<String, dynamic>
        ? checkout['delivery_date'] as Map<String, dynamic>
        : <String, dynamic>{};

    final deliveryDates = checkout['deliveryDates'] is List
        ? checkout['deliveryDates'] as List
        : [];

    final checkoutSections = [
      {
        'type': 'text',
        'header': 'Delivery Address',
        'required': true,
        'content': deliveryAddress.isEmpty
            ? 'Add a valid delivery address'
            : deliveryAddress,
        'buttonLabel': deliveryAddress.isEmpty ? 'Add Address' : 'Change',
        'missing': deliveryAddress.isEmpty,
        'onTap': (BuildContext context) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => UserAddressScreen(authToken: widget.authToken),
            ),
          );
        },
      },
      {
        'type': 'text',
        'header': 'Phone Number',
        'required': true,
        'content': phoneNumber.isEmpty ? 'Add a phone number' : phoneNumber,
        'buttonLabel': phoneNumber.isEmpty ? 'Add Phone Number' : 'Change',
        'missing': phoneNumber.isEmpty,
        'onTap': (BuildContext context) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) =>
                  UserphonenumberScreen(authToken: widget.authToken),
            ),
          );
        },
      },
      {
        'type': 'dates',
        'header': 'Delivery Date',
        'required': true,
        'dates': deliveryDates,
        'selectedDate': selectedDeliveryDate,
      },
      {
        'type': 'text',
        'header': 'Delivery Instruction',
        'required': false,
        'content': deliveryInstruction.isEmpty ? '' : deliveryInstruction,
        'buttonLabel': deliveryInstruction.isEmpty ? 'Specify' : 'Change',
        'missing': false,
        'onTap': (BuildContext context) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) =>
                  DeliveryInstructionScreen(authToken: widget.authToken),
            ),
          );
        },
      },
      {
        'type': 'text',
        'header': 'Promo Code or Coupon',
        'required': false,
        'content': promoCode.isEmpty ? '' : promoCode,
        'buttonLabel': promoCode.isEmpty ? 'Use Promo Code' : 'Change',
        'missing': false,
        'onTap': (BuildContext context) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => PromoCodeScreen(authToken: widget.authToken),
            ),
          );
        },
      },
    ];

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
                        final dates = section['dates'] is List
                            ? section['dates'] as List
                            : [];

                        final selectedDate =
                            section['selectedDate'] is Map<String, dynamic>
                            ? section['selectedDate'] as Map<String, dynamic>
                            : <String, dynamic>{};

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
                                          section['header'].toString(),
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
                                        itemCount: dates.length,
                                        separatorBuilder: (context, index) =>
                                            const SizedBox(width: 10),
                                        itemBuilder: (context, index) {
                                          final rawDate = dates[index];

                                          final date =
                                              rawDate is Map<String, dynamic>
                                              ? rawDate
                                              : <String, dynamic>{};

                                          final day =
                                              date['day']?.toString() ?? '';
                                          final number =
                                              date['date']?.toString() ?? '';
                                          final month =
                                              date['month']?.toString() ?? '';

                                          final selected =
                                              date['dateid'] ==
                                              selectedDate['dateid'];

                                          return GestureDetector(
                                            onTap: () {
                                              context
                                                  .read<CheckoutProvider>()
                                                  .updateDeliveryDate(date);
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
                                                    day,
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
                                                    number,
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
                                                    month,
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
                                        section['header'].toString(),
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
                                    section['content'].toString(),
                                    style: sectionContent(
                                      color: section['missing'] == true
                                          ? Colors.red
                                          : Colors.black,
                                    ),
                                  ),

                                  const SizedBox(height: 10),

                                  GestureDetector(
                                    onTap: () {
                                      final onTap = section['onTap'];
                                      if (onTap is Function) {
                                        onTap(context);
                                      }
                                    },
                                    child: Container(
                                      decoration: buttonStyle(),
                                      padding: buttonPadding(),
                                      child: Text(
                                        section['buttonLabel'].toString(),
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
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          'Sub-total',
                          style: TextStyle(
                            color: Color(0xFF249B48),
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        Text(
                          money(checkout['subtotal']),
                          style: const TextStyle(
                            color: Colors.black87,
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 10),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          'Delivery Fee',
                          style: TextStyle(
                            color: Color(0xFF249B48),
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        Text(
                          money(checkout['delivery_fee']),
                          style: const TextStyle(
                            color: Colors.black87,
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 10),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          'Final Total',
                          style: TextStyle(
                            color: Color(0xFF249B48),
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        Text(
                          money(checkout['total']),
                          style: const TextStyle(
                            color: Colors.black87,
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),

                const SizedBox(height: 16),

                GestureDetector(
                  onTap: () async {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) =>
                            OrderPreviewScreen(authToken: widget.authToken),
                      ),
                    );
                  },
                  child: Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                      color: const Color(0xFF249B48),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    padding: const EdgeInsets.symmetric(
                      vertical: 14,
                      horizontal: 16,
                    ),
                    child: const Center(
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
              ],
            ),
          ),
        ),
      ),
    );
  }
}
