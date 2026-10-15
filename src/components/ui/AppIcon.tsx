"use client";

import { Icon } from "@iconify-icon/react";
import type { IconifyIcon, IconifyIconProps } from "@iconify-icon/react";

import arrowRight from "@iconify-icons/solar/arrow-right-linear";
import checkCircle from "@iconify-icons/solar/check-circle-linear";
import gift from "@iconify-icons/solar/gift-linear";
import userPlus from "@iconify-icons/solar/user-plus-linear";
import shieldCheck from "@iconify-icons/solar/shield-check-linear";
import documentText from "@iconify-icons/solar/document-text-linear";
import football from "@iconify-icons/solar/football-linear";
import gameboy from "@iconify-icons/solar/gameboy-linear";
import ticket from "@iconify-icons/solar/ticket-linear";
import infoCircle from "@iconify-icons/solar/info-circle-linear";
import boltCircle from "@iconify-icons/solar/bolt-circle-linear";
import penNewSquare from "@iconify-icons/solar/pen-new-square-linear";
import billList from "@iconify-icons/solar/bill-list-linear";
import dangerTriangle from "@iconify-icons/solar/danger-triangle-linear";
import phone from "@iconify-icons/solar/phone-linear";
import userId from "@iconify-icons/solar/user-id-linear";
import whatsapp from "@iconify-icons/logos/whatsapp-icon";

export type AppIconName =
  | "solar:arrow-right-linear"
  | "solar:check-circle-linear"
  | "solar:gift-linear"
  | "solar:user-plus-linear"
  | "solar:shield-check-linear"
  | "solar:document-text-linear"
  | "solar:pen-new-square-linear"
  | "solar:bill-list-linear"
  | "solar:danger-triangle-linear"
  | "solar:phone-linear"
  | "solar:user-id-linear"
  | "solar:football-linear"
  | "solar:gameboy-linear"
  | "solar:ticket-linear"
  | "solar:info-circle-linear"
  | "solar:bolt-circle-linear"
  | "logos:whatsapp-icon";

const icons: Record<AppIconName, IconifyIcon> = {
  "solar:arrow-right-linear": arrowRight,
  "solar:check-circle-linear": checkCircle,
  "solar:gift-linear": gift,
  "solar:user-plus-linear": userPlus,
  "solar:shield-check-linear": shieldCheck,
  "solar:document-text-linear": documentText,
  "solar:football-linear": football,
  "solar:gameboy-linear": gameboy,
  "solar:ticket-linear": ticket,
  "solar:info-circle-linear": infoCircle,
  "solar:bolt-circle-linear": boltCircle,
  "solar:pen-new-square-linear": penNewSquare,
  "solar:bill-list-linear": billList,
  "solar:danger-triangle-linear": dangerTriangle,
  "solar:phone-linear": phone,
  "solar:user-id-linear": userId,
  "logos:whatsapp-icon": whatsapp,
};

type AppIconProps = Omit<IconifyIconProps, "icon" | "width" | "height" | "ref"> & {
  name: AppIconName;
  size?: number;
};

/** Icone Solar con dimensione e punto d'accesso condivisi. */
export function AppIcon({ name, size = 20, ...props }: AppIconProps) {
  return <Icon icon={icons[name]} width={size} height={size} aria-hidden="true" {...props} />;
}
