import axios from "axios";

export const createOpdBooking = async (payload) => {
  try {
    const { name, age, symptoms, suspectedDisease, hospitalPhone } = payload;

    console.log("📞 REAL VAPI CALL INITIATED");

    const response = await axios.post(
      "https://api.vapi.ai/call",
      {
        assistantId: process.env.VAPI_ASSISTANT_ID,

        phoneNumberId: "1c31f537-1424-4a0a-ac57-8f091cfacc6e",

        customer: {
          number: hospitalPhone, // hospital phone where AI will call
        },

        metadata: {
          patientName: name,
          age,
          symptoms,
          suspectedDisease: suspectedDisease || "Not specified",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.VAPI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Vapi Call Created:", response.data.id);

    // ⭐ return callId to controller
    return {
      id: response.data.id,
    };

  } catch (error) {
    console.error(
      "❌ Vapi Call Error:",
      error.response?.data || error.message
    );
    throw new Error("Failed to initiate AI call");
  }
};