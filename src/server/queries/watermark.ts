

export interface WatermarkConfig {
  enabled: boolean;
  position: string;
  sizePercentage: number;
  opacity: number;
  logoUrl: string;
}

export const getWatermarkConfig = (): WatermarkConfig => {
  return {
  "enabled": true,
  "position": "center",
  "sizePercentage": 70,
  "opacity": 0.3,
  "logoUrl": "https://vesta-crm-prod.s3.us-east-1.amazonaws.com/accounts/21/branding/logo_transparent_1777541776823_nwgzTV.png"
};
}