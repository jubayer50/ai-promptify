import { paymentSubmit } from "@/lib/action/payment";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/plan");
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const {
    status,
    metadata,
    amount_total,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const amount = amount_total / 100;

  const paymentData = {
    sessionId: session_id,
    payAmount: amount,
    userId: metadata?.userId,
    priceId: metadata?.priceId,
  };

  const redirectPath = metadata.redirectPath;

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    await paymentSubmit(paymentData);

    if (redirectPath) {
      redirect(redirectPath);
    }

    return (
      <section className="min-h-screen flex items-center justify-center px-3">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg border border-purple-100 p-6 md:p-10">
          <div className="flex flex-col items-center text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Payment{" "}
              <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Successful
              </span>
            </h2>

            <p className="text-gray-600">
              Thank you for your purchase. Your premium access has been
              activated successfully.
            </p>

            {/* Payment Info */}
            <div className="w-full mt-6 space-y-3 border rounded-xl p-5 bg-gray-50">
              <div className="flex justify-between">
                <span className="text-gray-500">Payment Amount</span>
                <span className="font-semibold">${amount}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">Customer Email</span>
                <span className="font-semibold break-all">{customerEmail}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Payment Status</span>
                <span className="text-green-600 font-semibold">Paid</span>
              </div>
            </div>

            {/* Message */}
            <p className="mt-6 text-sm text-gray-500">
              A confirmation email has been sent to your email address.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
