import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { LoadingButton } from "@mui/lab";

import { styled } from "@mui/material/styles";
import { validate } from "bitcoin-address-validation";

import { Currency, FormValues, FormErrors } from "./helperTypes";

const currencies: Currency[] = [
  { label: "Bitcoin", value: "BTC" },
  { label: "Tether", value: "USDT" },
];

const Form = styled("form")({
  backgroundColor: "#b3d9ff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

function isValidCryptoAddress(address: string, currency: string) {
  return validate(address);
}

export default function FancyForm() {
  const [openToast, setOpenToast] = useState(false);
  const [openErrorToast, setOpenErrorToast] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    recipient: "",
    amount: "",
    currency: "BTC",
    otp: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    recipient: false,
    amount: false,
    otp: false,
  });

  const handleSendOTP = () => {
    setIsDisabled(true);
    setOpenToast(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 3000);
  };

  const handleToastClose = () => {
    setOpenToast(false);
  };

  const handleErrorToastClose = () => {
    setOpenErrorToast(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setFormValues({
      ...formValues,
      currency: event.target.value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    // Mock backend
    setTimeout(() => {
      // Set respective errors
      const recipientError =
        !isValidCryptoAddress(formValues.recipient, formValues.currency) ||
        formValues.recipient.length === 0;

      const amountError =
        isNaN(Number(formValues.amount)) ||
        formValues.amount.length === 0 ||
        Number(formValues.amount) < 0;

      const otpError = formValues.otp !== "123a";

      setFormErrors({
        recipient: recipientError,
        amount: amountError,
        otp: otpError,
      });

      // If there are any errors in the inputs
      if (recipientError || amountError || otpError) {
        console.log(formValues);
        setOpenErrorToast(true);
      }
      // If there are no errors
      else if (!recipientError || !amountError || !otpError) {
        console.log(formValues);
        setOpenModal(true);
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Form>
        <Stack spacing={1}>
          <TextField
            error={formErrors.recipient}
            name="recipient"
            value={formValues.recipient}
            onChange={handleChange}
            label="Recipient Address"
          />
          <Stack direction="row">
            <TextField
              error={formErrors.amount}
              name="amount"
              value={formValues.amount}
              onChange={handleChange}
              label="Amount"
              style={{ width: "65%" }}
            />
            <FormControl style={{ width: "35%" }}>
              <Select
                name="currency"
                value={formValues.currency}
                onChange={handleSelectChange}
              >
                {currencies.map((cur) => (
                  <MenuItem key={cur.value} value={cur.value}>
                    {cur.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="row">
            <TextField
              error={formErrors.otp}
              name="otp"
              value={formValues.otp}
              onChange={handleChange}
              label="OTP"
              style={{ width: "35%" }}
            />
            <Button
              onClick={handleSendOTP}
              variant="outlined"
              style={{ width: "65%" }}
              disabled={isDisabled}
            >
              Send OTP
            </Button>
          </Stack>
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Complete Transaction
          </LoadingButton>
        </Stack>
      </Form>
      <Snackbar
        open={openToast}
        onClose={handleToastClose}
        message="Your OTP is 123a (This should be sent as a text message.)"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
      <Snackbar
        open={openErrorToast}
        autoHideDuration={2000}
        onClose={handleErrorToastClose}
        message="Check your inputs again!"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
      <Snackbar
        open={openModal}
        autoHideDuration={4000}
        onClose={() => {
          setOpenModal(false);
        }}
        message={`You've sent ${formValues.amount}${formValues.currency} to ${formValues.recipient}`}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
    </>
  );
}
