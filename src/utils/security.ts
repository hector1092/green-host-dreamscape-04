// Simple token generation and verification for client-side demo purposes only
// In production, authentication should be handled by a proper backend server

const generateRandomString = (length: number) => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  const hashedInput = await hashPassword(password);
  return hashedInput === hashedPassword;
};

export const generateToken = (userId: string): string => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({ userId, exp: Date.now() + 24 * 60 * 60 * 1000 }));
  const signature = generateRandomString(32);
  return `${header}.${payload}.${signature}`;
};

export const verifyToken = (token: string): any => {
  try {
    const [_, payload] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    
    if (decodedPayload.exp < Date.now()) {
      return null;
    }
    
    return decodedPayload;
  } catch (error) {
    return null;
  }
};

export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOTP = async (otp: string): Promise<void> => {
  // في بيئة الإنتاج، يجب استخدام خدمة SMS حقيقية
  console.log(`Sending OTP ${otp} to +201030435987`);
  
  // محاكاة إرسال الرسالة
  const whatsappUrl = `https://wa.me/201030435987?text=رمز التحقق الخاص بك هو: ${otp}`;
  window.open(whatsappUrl, '_blank');
};