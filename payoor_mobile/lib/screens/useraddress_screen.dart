import 'dart:async';

import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:provider/provider.dart';

import '../utils/api.dart';

import '../providers/checkout_provider.dart';

import '../widgets/app_layout.dart';
import '../widgets/chat_header.dart';
import '../widgets/menu_layout.dart';

class UserAddressScreen extends StatefulWidget {
  final String authToken;

  const UserAddressScreen({super.key, required this.authToken});

  @override
  State<UserAddressScreen> createState() => _UserAddressScreenState();
}

class _UserAddressScreenState extends State<UserAddressScreen> {
  bool isLoading = false;
  bool isLocationLoading = false;

  String addressValue = "";
  String selectedAddress = "";

  final TextEditingController controller = TextEditingController();

  Timer? debounce;

  List<Map<String, dynamic>> addresses = [];

  @override
  void initState() {
    super.initState();

    final checkoutProvider = context.read<CheckoutProvider>();
    final checkout = checkoutProvider.checkoutData?['checkout'] ?? {};
    final currentAddress = checkout['delivery_address']?.toString() ?? '';

    selectedAddress = currentAddress;
    controller.text = currentAddress;

    controller.addListener(() {
      addressValue = controller.text.trim();

      debounce?.cancel();

      if (addressValue.isEmpty) {
        setState(() {
          addresses = [];
        });
        return;
      }

      debounce = Timer(const Duration(milliseconds: 500), () {
        getAddresses();
      });
    });
  }

  Future<void> getAddresses() async {
    try {
      setState(() {
        isLoading = true;
      });

      final data = await requestServerGet(
        '/shopper/google/search-places',
        queryParams: {'query': addressValue},
        headers: {'Authorization': 'Bearer ${widget.authToken}'},
      );

      final List rawAddresses = data['data']?['placesResponse'] ?? [];

      if (!mounted) return;

      setState(() {
        addresses = rawAddresses
            .map((item) => Map<String, dynamic>.from(item))
            .toList();
      });
    } catch (e) {
      print(e);
    } finally {
      if (mounted) {
        setState(() {
          isLoading = false;
        });
      }
    }
  }

  Future<void> useCurrentLocation() async {
    try {
      setState(() {
        isLocationLoading = true;
      });

      final serviceEnabled = await Geolocator.isLocationServiceEnabled();

      if (!serviceEnabled) {
        print('Location services are disabled');
        return;
      }

      LocationPermission permission = await Geolocator.checkPermission();

      if (permission == LocationPermission.denied) {
        permission = await Geolocator.requestPermission();
      }

      if (permission == LocationPermission.denied ||
          permission == LocationPermission.deniedForever) {
        print('Location permission denied');
        return;
      }

      final position = await Geolocator.getCurrentPosition(
        locationSettings: const LocationSettings(
          accuracy: LocationAccuracy.high,
        ),
      );

      final data = await requestServerGet(
        '/shopper/google/use-current-location',
        queryParams: {
          'lat': position.latitude.toString(),
          'lng': position.longitude.toString(),
        },
        headers: {'Authorization': 'Bearer ${widget.authToken}'},
      );

      final address = data['data']?['address']?.toString() ?? '';

      if (!mounted) return;

      setState(() {
        selectedAddress = address;
        controller.text = address;
        addresses = [];
      });
    } catch (e) {
      print('Location error: $e');
    } finally {
      if (mounted) {
        setState(() {
          isLocationLoading = false;
        });
      }
    }
  }

  void submitAddress() {
    final address = selectedAddress.isNotEmpty
        ? selectedAddress
        : controller.text.trim();

    if (address.isEmpty) {
      print('No address selected');
      return;
    }

    context.read<CheckoutProvider>().updateDeliveryAddress(address);

    Navigator.pop(context);
  }

  @override
  void dispose() {
    debounce?.cancel();
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MenuLayout(
      page: Scaffold(
        backgroundColor: const Color(0xFFFFFFFF),
        resizeToAvoidBottomInset: true,
        body: AppLayout(
          child: Column(
            children: [
              const ChatHeader(green: true, topic: 'Address'),

              const SizedBox(height: 14),

              Expanded(
                child: ListView(
                  children: [
                    TextField(
                      controller: controller,
                      decoration: InputDecoration(
                        hintText: 'Search for an address',
                        contentPadding: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 14,
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(12),
                          borderSide: const BorderSide(
                            color: Color(0xFF249B48),
                            width: 1.5,
                          ),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(12),
                          borderSide: const BorderSide(
                            color: Color(0xFF249B48),
                            width: 2,
                          ),
                        ),
                      ),
                    ),

                    const SizedBox(height: 10),

                    if (isLoading)
                      const Center(
                        child: Padding(
                          padding: EdgeInsets.all(16),
                          child: CircularProgressIndicator(
                            color: Color(0xFF249B48),
                          ),
                        ),
                      ),

                    ...addresses.map((address) {
                      final formattedAddress =
                          address['formatted_address']?.toString() ?? '';

                      return GestureDetector(
                        onTap: () {
                          setState(() {
                            selectedAddress = formattedAddress;
                            controller.text = formattedAddress;
                            addresses = [];
                          });
                        },
                        child: Container(
                          margin: const EdgeInsets.only(bottom: 10),
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            color: selectedAddress == formattedAddress
                                ? const Color(0xFF249B48).withOpacity(0.08)
                                : Colors.white,
                            border: Border.all(
                              color: const Color(0xFF249B48),
                              width: 1,
                            ),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Icon(
                                Icons.location_on_outlined,
                                color: Color(0xFF249B48),
                                size: 20,
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Text(
                                  formattedAddress,
                                  style: const TextStyle(
                                    fontSize: 13,
                                    height: 1.4,
                                    color: Colors.black87,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    }),
                  ],
                ),
              ),

              Column(
                children: [
                  GestureDetector(
                    onTap: isLocationLoading ? null : useCurrentLocation,
                    child: Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 10,
                      ),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        border: Border.all(
                          color: const Color(0xFF249B48),
                          width: 1.5,
                        ),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Center(
                        child: isLocationLoading
                            ? const SizedBox(
                                width: 18,
                                height: 18,
                                child: CircularProgressIndicator(
                                  strokeWidth: 2,
                                  color: Color(0xFF249B48),
                                ),
                              )
                            : const Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Icon(
                                    Icons.my_location,
                                    color: Color(0xFF249B48),
                                    size: 18,
                                  ),
                                  SizedBox(width: 8),
                                  Text(
                                    'Use Current Location',
                                    style: TextStyle(
                                      color: Color(0xFF249B48),
                                      fontSize: 14,
                                      fontWeight: FontWeight.w600,
                                    ),
                                  ),
                                ],
                              ),
                      ),
                    ),
                  ),

                  const SizedBox(height: 10),

                  GestureDetector(
                    onTap: submitAddress,
                    child: Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 10,
                      ),
                      decoration: BoxDecoration(
                        color: const Color(0xFF249B48),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Center(
                        child: Text(
                          'Done',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 14,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/*Future<void> useCurrentLocation() async {
  try {
    setState(() {
      isLocationLoading = true;
    });

    bool serviceEnabled = await Geolocator.isLocationServiceEnabled();

    if (!serviceEnabled) {
      print('Location services are disabled');
      return;
    }

    LocationPermission permission = await Geolocator.checkPermission();

    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
    }

    if (permission == LocationPermission.denied ||
        permission == LocationPermission.deniedForever) {
      print('Location permission denied');
      return;
    }

    final position = await Geolocator.getCurrentPosition(
      locationSettings: const LocationSettings(
        accuracy: LocationAccuracy.high,
      ),
    );

    final data = await requestServerGet(
      '/shopper/google/use-current-location',
      queryParams: {
        'lat': position.latitude.toString(),
        'lng': position.longitude.toString(),
      },
      headers: {
        'Authorization': 'Bearer ${widget.authToken}',
      },
    );

    final address = data['data']?['address']?.toString() ?? '';

    if (!mounted) return;

    setState(() {
      selectedAddress = address;
      controller.text = address;
      addresses = [];
    });

    print(data);
  } catch (e) {
    print('Location error: $e');
  } finally {
    if (mounted) {
      setState(() {
        isLocationLoading = false;
      });
    }
  }
}*/
