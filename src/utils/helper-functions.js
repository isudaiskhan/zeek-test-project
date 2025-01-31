import Promise from "promise";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { uploadFile } from "@/services/file";

export const getImageBase64URL = async (file) => {
  if (!file) return null;

  return await new Promise((res) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      res(reader.result);
    };
  }).then((res) => res);
};

export const convertObjectToFormData = (data = {}) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      Object.entries(value).forEach(([_key, _value]) => {
        formData.append(`${key}[${_key}]`, _value);
      });
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};

export const generateRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += letters[randomIndex];
  }

  return color;
};

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const transformString = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const uploadFileFunc = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return await uploadFile(formData);
};
