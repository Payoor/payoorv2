import crypto from 'crypto';
import Coupon from '../models/Coupon.js' 

// A helper function to generate a random hex code for the coupon
const generateCouponCode = () => {
  return crypto.randomBytes(5).toString('hex').toUpperCase();
};

/**
 * Creates a specified number of dummy coupon documents in the database.
 * Some coupons will be associated with an affiliate, and others will not.
 * @param {number} count The number of dummy coupons to create.
 */
const createDummyCoupons = async (count = 10) => {
  
  const couponPromises = [];
  const affiliateEmails = ['affiliate1@example.com', 'affiliate2@example.com'];

  console.log(`Creating ${count} dummy coupons...`);

  for (let i = 0; i < count; i++) {
    const isAffiliateCoupon = Math.random() > 0.5; // 50% chance of having an affiliate
    const hasPercentageOff = Math.random() > 0.5; // 50% chance of a percentage discount
    
    // Create an object for the new coupon
    const newCouponData = {
      name: `Dummy Coupon ${i + 1}`,
      code: generateCouponCode(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Expires in 30 days
      usageLimit: 1, // All dummy coupons are single-use for this example
    };

    // Add affiliate details if applicable
    if (isAffiliateCoupon) {
      newCouponData.affiliateKey = affiliateEmails[i % affiliateEmails.length];
      newCouponData.affiliatePercentage = Math.floor(Math.random() * 21) + 5; // 5-25%
    }
    
    // Assign a discount type
    if (hasPercentageOff) {
      newCouponData.percentageOff = Math.floor(Math.random() * 21) + 10; // 10-30% off
    } else {
      newCouponData.deliveryAmountOff = Math.floor(Math.random() * 5) + 1; // $1-5 off delivery
    }
    
    // Push the save operation to the array of promises
    const newCoupon = new Coupon(newCouponData);
    couponPromises.push(newCoupon.save());
  }

  try {
    const results = await Promise.all(couponPromises);
    console.log(`Successfully created ${results.length} coupons.`);
    return results;
  } catch (error) {
    console.error('Error creating dummy coupons:', error);
    throw error;
  }
};

// Example of how you would run this function after connecting to your database
const run = async () => {
  try {
    // Replace with your actual MongoDB connection string
    // await mongoose.connect('your_mongodb_connection_string_here');
    // console.log('Connected to MongoDB.');

    await createDummyCoupons(10);
  } catch (error) {
    console.error('Failed to run coupon creation script:', error);
  } finally {
    // You might want to disconnect after running the script
    // await mongoose.disconnect();
    // console.log('Disconnected from MongoDB.');
  }
};

run();