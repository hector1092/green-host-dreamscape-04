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
  const message = `رمز التحقق الخاص بك في Green Host هو: ${otp}`;
  const whatsappUrl = `https://wa.me/201030435987?text=${encodeURIComponent(message)}`;
  
  try {
    const newWindow = window.open(whatsappUrl, '_blank');
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }
  } catch (error) {
    window.location.href = whatsappUrl;
  }
};