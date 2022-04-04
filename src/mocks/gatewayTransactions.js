export const response_deposit_pix_success = {
  status_code: 200,
  data: {
    full_name: "Francisco Assis",
    document_number: "61317581075",
    kyc_limits: {
      available_amount: 9864099,
      limit: 9999999,
      used_limit: 135900,
      kyc_level: "3",
      kyc_level_name: "Gold",
    },
    original_amount: 5000,
    original_currency: "BRL",
    final_amount: 5000,
    converted_amount: 0,
    taxes: 0,
    receivable_url:
      "00020101021226580014BR.GOV.BCB.PIX0136b46359c8-3eaa-4b42-a3c6-0972a9c4a2265204000053039865406111.115802BR5912Pay Livrepix6014Belo Horizonte610830380403620605029X6304BFA4",
    deposit_type_id: 4,
    redirect_url: "https://www.merchant_to_you.com",
    billet_digitable_line: null,
    billet_due_date: null,
    deposit_id: 11389,
    order_id: 13767,
    transaction_id: null,
  },
};

export const response_error_empty_amount = {
  status_code: 422,
  data: {
    message: "The given data was invalid.",
    errors: {
      amount: ["The amount field is required."],
    },
  },
};

export const response_error_user_kyc_limit_exceeded = {
  status_code: 400,
  data: {
    message: "User Kyc Limit exceeded",
    errors: {
      limit_exceeded:
        "You don't have enough limit available for this transaction.",
      available_limit: 634696,
      kyc_level: "2",
      kyc_level_name: "Silver",
      limit: 1000000,
      used_limit: 365304,
      free_transaction_limit: 0,
    },
    type: "App\\Exceptions\\Kyc\\KycException",
  },
};

export const error_merchant_not_found = {
  status_code: 403,
  data: {
    message: "Merchant not found.",
  },
};

export const error_invalid_signature = {
  status_code: 403,
  data: {
    message: "Invalid signature.",
  },
};

export const error_invalid_document = {
  status_code: 403,
  data: {
    message: "The given data was invalid.",
    errors: {
      document_number: ["The document number is invalid."],
    },
  },
};
