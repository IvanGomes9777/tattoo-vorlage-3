export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) && email.length <= 254;
}

export function validatePhone(phone: string): boolean {
  if (!phone) return true; // optional
  const clean = phone.replace(/\D/g, "");
  return clean.length >= 6 && clean.length <= 15;
}

export function sanitizeText(text: string): string {
  return text.replace(/[<>]/g, "").trim();
}
