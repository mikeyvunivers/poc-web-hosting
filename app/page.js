"use client"
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import Script from "next/script";
import {
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import PiereLogoPurple from "../public/images/landing-page/piere-logo-purple.svg";
import PiereLogoWhite from "../public/images/landing-page/piere-logo-white.svg";
import HamburgerMenu from "../public/images/landing-page/header-hamburger.svg";
import HeaderClose from "../public/images/landing-page/header-close.svg";
import CloseIcon from "../public/images/landing-page/close-icon-purple.svg";
import TwitterIcon from "../public/images/landing-page/twitter-icon-white.svg";
import FacebookIcon from "../public/images/landing-page/facebook-icon-white.svg";
import TikTokIcon from "../public/images/landing-page/tiktok-icon-white.svg";
import InstagramIcon from "../public/images/landing-page/instagram-icon-white.svg";
import ArrowDownIcon from "../public/images/landing-page/arrow-down-white.svg";
// import Section2Bg from "../public/images/landing-page/section2-bg.png";
// import Section2BgMobile from "../public/images/landing-page/section2-bg-mobile.png";
import Section2SharePayments from "../public/images/landing-page/section2-share-payments.svg";
// import Section2ReconcileAutomatically from "../public/images/landing-page/section2-reconcile-automatically.svg";
import Section2KeepOnTrack from "../public/images/landing-page/section2-keep-on-track.svg";
import Section2GetAnswers from "../public/images/landing-page/section2-get-answers.svg";
import Section2SecurityFirst from "../public/images/landing-page/section2-security-first.svg";
import Section3SplitChecksDoneRight from "../public/images/landing-page/section3-split-checks-done-right.svg";
import Section3BundledWithEase from "../public/images/landing-page/section3-bundled-with-ease.svg";
import Section3SimpleRepayments from "../public/images/landing-page/section3-simple-repayments.svg";
import Section3PaymentsYourWay from "../public/images/landing-page/section3-payments-your-way.svg";
// import Section4Bg from "../public/images/landing-page/section4-bg.png";
// import Section4BgMobile from "../public/images/landing-page/section4-bg-mobile.png";
import Section4ARicherPotential from "../public/images/landing-page/section4-a-richer-potential.svg";
import Section4RealTimeInsights from "../public/images/landing-page/section4-real-time-insights.svg";
import Section4LifeWithoutLimits from "../public/images/landing-page/section4-life-without-limits.svg";
import Section4ClearerGoalsTracking from "../public/images/landing-page/section4-clearer-goals-tracking-new.svg";
import Section5CategoryMatching from "../public/images/landing-page/section5-category-matching.svg";
import Section5AutomatedBudgeting from "../public/images/landing-page/section5-automated-budgeting.svg";
import Section5ActionableTrends from "../public/images/landing-page/section5-actionable-trends.svg";
import Section5BudgetWithBrains from "../public/images/landing-page/section5-budget-with-brains.svg";
import Section5BudgetWithBrainsMobile from "../public/images/landing-page/section5-budget-with-brains-mobile.svg";
// import Section6Bg from "../public/images/landing-page/section6-bg.png";
// import Section6BgMobile from "../public/images/landing-page/section6-bg-mobile.png";
import Section6AnswersToTrust from "../public/images/landing-page/section6-answers-to-trust.svg";
import Section6PersonalizedAi from "../public/images/landing-page/section6-personalized-ai.svg";
import Section6AlwaysUpToDate from "../public/images/landing-page/section6-always-up-to-date.svg";
import Section6ChatWithPiere from "../public/images/landing-page/section6-chat-with-piere.svg";
import Section7YourBankWithPiere from "../public/images/landing-page/section7-your-bank-with-piere.svg";
import Section7UnderstandYourDebts from "../public/images/landing-page/section7-understand-your-debts.svg";
import Section7BuiltSecure from "../public/images/landing-page/section7-built-secure.svg";
import Section7OneAppEndlessUses from "../public/images/landing-page/section7-one-app-endless-uses.svg";
import Section7OneAppEndlessUsesMobile from "../public/images/landing-page/section7-one-app-endless-uses-mobile.svg";
// import Section8Bg from "../public/images/landing-page/section8-bg.png";
// import Section8BgMobile from "../public/images/landing-page/section8-bg-mobile.png";

const LandingPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openWaitList, setOpenWaitList] = useState(false);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const media1024Up = useMediaQuery("(min-width:1024px)");

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  const handleOpenWaitList = () => {
    setOpenWaitList(true);
  };
  const handleCloseWaitList = () => {
    setOpenWaitList(false);
  };

  const boxGridStyling = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "1fr",
    gap: "20px",
  };
  const gridStyle = {
    width: "100%",
    maxWidth: "1280px!important",
    margin: "0 auto",
  };
  const headerContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    gap: "10px",
    bgcolor: "#3C1C8F",
    ...(media1024Up ? { p: "25px 40px" } : { p: "20px 25px" }),
  };
  const logoButton = {
    transition: "all 0.5s ease",
    "&:hover": {
      bgcolor: "transparent",
      opacity: 0.75,
    },
  };
  const headerLinksContainer = {
    display: "flex",
    gap: { xs: "15px", lg: "51px" },
  };
  const headerSocialLinksContainer = {
    display: "flex",
    gap: "11px",
  };
  const headerLink = {
    color: "white",
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.352px",
    transition: "all 0.5s ease",
    "&:hover": {
      bgcolor: "transparent",
      opacity: 0.75,
    },
  };
  const headerSocialLink = {
    p: 0,
    minWidth: "24px",
    width: "24px",
    height: "24px",
    transition: "all 0.5s ease",
    "&:hover": {
      bgcolor: "transparent",
      opacity: 0.75,
    },
  };
  const hamburgerOpenCloseButton = {
    p: 0,
    minWidth: "30px",
    width: "30px",
    height: "30px",
    "&:hover": {
      bgcolor: "transparent",
      opacity: 0.75,
    },
  };
  const hamburgerContainer = {
    bgcolor: "#3C1C8F",
    alignSelf: "stretch",
    pb: "73px",
  };
  const hamburgerContentContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    px: "10px",
  };
  const hamburgerDivider = {
    alignSelf: "stretch",
    height: "1px",
    bgcolor: "rgba(216, 216, 230, 0.1)",
  };
  const hamburgerLinksContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  };
  const hamburgerLink = {
    color: "white",
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.44px",
    transition: "all 0.5s ease",
    "&:hover": {
      bgcolor: "transparent",
      opacity: 0.75,
    },
  };
  const waitListModalcontainer = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "stretch",
    p: "40px",
    height: "100%",
  };
  const waitListContainer = {
    p: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    borderRadius: "20px",
    bgcolor: "rgba(66, 61, 170, 0.10)",
  };
  const gradientTitleSpan = {
    fontFamily: "inherit",
    background: "linear-gradient(270deg, #29A5A3 0%, #611DAD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  const superscriptStyling = {
    fontFamily: "inherit",
    fontWeight: "inherit",
    fontSize: "30px",
    lineHeight: "28.5px",
    letterSpacing: "-0.022em",
    color: "inherit",
  };
  const section1Style = {
    width: "100%",
    paddingTop: "53px",
    paddingBottom: "137px",
    px: "15px",
    // bgcolor: "#3C1C8F",
    background: "linear-gradient(#3C1C8F, #5E96B0)",
  };
  const section1Title = {
    fontFamily: "'Passion One', cursive",
    fontSize: { /* xs: "48px" */ xs: "65px", sm: "110px" },
    lineHeight: { /* xs: "38.4px" */ xs: "52px", sm: "88px" },
    letterSpacing: { xs: "-1.056px", sm: "-2.42px" },
    textTransform: "uppercase",
    textAlign: "center",
    textShadow: "0px 4px 10px #2B165F",
    color: "white",
    mb: { xs: "45px", sm: "91px" },
  };
  const section1Column = {
    gridColumn: { xs: "span 12", sm: "span 4" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "375px",
    margin: "0 auto",
    // mb: { xs: "50px", sm: "110px" },
  };
  const section1SeeBelowContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    animation: "bounce 3s infinite",
    animationTimingFunction: "ease",
  };
  const section1SeeBelowText = {
    color: "white",
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    letterSpacing: "-0.352px",
  };
  const section2Style = {
    width: "100%",
    paddingTop: { xs: "46px", sm: "131px" },
    paddingBottom: { xs: "53px", sm: "70px" },
    px: "15px",
    bgcolor: "white",
    // backgroundImage: {
    //   xs: `url(${Section2BgMobile.src})`,
    //   sm: `url(${Section2Bg.src})`,
    // },
    // backgroundPosition: "bottom center",
    // backgroundRepeat: "no-repeat",
  };
  const section2Title = {
    fontFamily: "'Passion One', cursive",
    fontWeight: { xs: 400, sm: 700 },
    fontSize: { xs: "48px", sm: "80px" },
    lineHeight: { xs: "38.4px", sm: "76px" },
    letterSpacing: { xs: "-1.056px", sm: "-1.76px" },
    textTransform: "uppercase",
    textAlign: "center",
    color: "#0F0F43",
  };
  const section2Column = {
    gridColumn: { xs: "span 12", sm: "span 6" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "385px",
    margin: "0 auto",
    mb: { xs: "50px", sm: "110px" },
  };
  const section2Subtitle = {
    textAlign: "center",
    color: "#434349",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.44px",
  };
  const section2Description = {
    textAlign: "center",
    color: "#8A8A95",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.352px",
    mb: "20px",
  };
  const section2Card = {
    maxWidth: "793px!important",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.8)",
    // backdropFilter: "blur(2px)",
    // boxShadow: "0px 4px 10px grey",
    boxShadow: "0px 0px 20px 0px rgba(23, 19, 116, 0.15)",
  };
  const section2CardDescription = {
    textAlign: "center",
    color: "#8A8A95",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "-0.308px",
  };
  const section3Style = {
    width: "100%",
    paddingTop: { xs: "62px", md: "133px" },
    px: "15px",
    // bgcolor: "#3C1C8F",
    background: "linear-gradient(45deg, #3C1C8F, #5E96B0)",
  };
  const section3Title = {
    fontFamily: "'Passion One', cursive",
    fontWeight: { xs: 400, sm: 700 },
    fontSize: { xs: "48px", md: "80px" },
    lineHeight: { xs: "38.4px", md: "72px" },
    letterSpacing: { xs: "-1.056px", md: "-1.76px" },
    textTransform: "uppercase",
    textAlign: { xs: "center", sm: "left" },
    color: "white",
  };
  const section3Description = {
    color: "white",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: { xs: "16px", md: "25px" },
    lineHeight: { xs: "24px", md: "37.5px" },
    letterSpacing: { xs: "-0.352px", md: "-0.55px" },
    textAlign: { xs: "center", sm: "left" },
  };
  const section3Column = {
    gridColumn: { xs: "span 12", sm: "span 6" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "385px",
    margin: "0 auto",
  };
  const section3BulletContainer = {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    gap: "20px",
    p: "20px",
  };
  const section3BulletImageContainer = {
    minWidth: "40px",
    width: "40px",
    height: "40px",
  };
  const section3BulletTextContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  };
  const section3BulletTitle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    color: "white",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.44px",
  };
  const section3BulletDescription = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: "white",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.352px",
  };
  const section4Style = {
    width: "100%",
    paddingTop: { xs: "46px", sm: "110px" },
    bgcolor: "white",
    // backgroundImage: {
    //   xs: `url(${Section4BgMobile.src})`,
    //   sm: `url(${Section4Bg.src})`,
    // },
    // backgroundPosition: "bottom center",
    // backgroundRepeat: "no-repeat",
  };
  const section4Title = {
    fontFamily: "'Passion One', cursive",
    fontWeight: { xs: 400, sm: 700 },
    fontSize: { xs: "48px", sm: "80px" },
    lineHeight: { xs: "38.4px", sm: "76px" },
    letterSpacing: { xs: "-1.056px", sm: "-1.76px" },
    textTransform: "uppercase",
    textAlign: "center",
    color: "#0F0F43",
  };
  const section4Description = {
    textAlign: "center",
    color: "#434349",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: { xs: "16px", sm: "25px" },
    lineHeight: { xs: "24px", sm: "37.5px" },
    letterSpacing: { xs: "-0.352px", sm: "-0.55px" },
    mt: "15px",
  };
  const section4Column = {
    gridColumn: { xs: "span 12", sm: "span 4" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: { xs: "385px", sm: "285px" },
    margin: "0 auto",
  };
  const section4BulletContainer = {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    gap: "20px",
  };
  const section4BulletImageContainer = {
    minWidth: "40px",
    width: "40px",
    height: "40px",
  };
  const section4BulletTextContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  };
  const section4BulletTitle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    color: "#434349",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.44px",
  };
  const section4BulletDescription = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: "#8A8A95",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.352px",
  };
  const section5Style = {
    width: "100%",
    paddingTop: { xs: "46px", sm: "130px" },
    px: "15px",
    // bgcolor: "#3C1C8F",
    background: "linear-gradient(#5E96B0, #3C1C8F)",
  };
  const section5Title = {
    fontFamily: "'Passion One', cursive",
    fontWeight: { xs: 400, sm: 700 },
    fontSize: { xs: "48px", sm: "80px" },
    lineHeight: { xs: "38.4px", sm: "72px" },
    letterSpacing: { xs: "-1.056px", sm: "-1.76px" },
    textTransform: "uppercase",
    textAlign: { xs: "center", sm: "left" },
    color: "white",
  };
  const section5Description = {
    color: "white",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: { xs: "16px", md: "25px" },
    lineHeight: { xs: "24px", md: "37.5px" },
    letterSpacing: { xs: "-0.352px", md: "-0.55px" },
    textAlign: { xs: "center", sm: "left" },
    mt: { xs: "15px", sm: "12px" },
    mb: { xs: "40px", sm: 0 },
  };
  const section5Column = {
    gridColumn: "span 12",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "385px",
    margin: "0 auto",
  };
  const section5BulletContainer = {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    gap: "20px",
    p: "20px",
  };
  const section5BulletImageContainer = {
    minWidth: "40px",
    width: "40px",
    height: "40px",
  };
  const section5BulletTextContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  };
  const section5BulletTitle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    color: "white",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.44px",
  };
  const section5BulletDescription = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.352px",
  };
  const section5Banner = {
    position: "relative",
    textAlign: "center",
    mt: { xs: "56px", sm: "115px" },
    mb: { xs: "-175px", sm: "-85px" },
    maxWidth: { xs: "385px", sm: "100%" },
  };
  const section6Style = {
    width: "100%",
    paddingTop: { xs: "236px", sm: "107px" },
    paddingBottom: { xs: "21px", sm: "129px" },
    px: "15px",
    bgcolor: "white",
    // backgroundImage: {
    //   xs: `url(${Section6BgMobile.src})`,
    //   sm: `url(${Section6Bg.src})`,
    // },
    // backgroundPosition: "bottom center",
    // backgroundRepeat: "no-repeat",
  };
  const section6Title = {
    fontFamily: "'Passion One', cursive",
    fontWeight: { xs: 400, sm: 700 },
    fontSize: { xs: "48px", sm: "80px" },
    lineHeight: { xs: "38.4px", sm: "70.8px" },
    letterSpacing: { xs: "-1.056px", sm: "-1.76px" },
    textTransform: "uppercase",
    textAlign: { xs: "center", sm: "left" },
    color: "#0F0F43",
  };
  const section6Description = {
    textAlign: { xs: "center", sm: "left" },
    color: "#434349",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: { xs: "16px", sm: "25px" },
    lineHeight: { xs: "24px", sm: "37.5px" },
    letterSpacing: { xs: "-0.352px", sm: "-0.55px" },
    mt: { xs: "15px", sm: "20px" },
    mb: { xs: "41px", sm: "89px" },
  };
  const section6Column = {
    gridColumn: "span 12",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "385px",
    margin: "0 auto",
  };
  const section6BulletContainer = {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    gap: "20px",
    maxWidth: "385px",
    ml: { xs: "auto", sm: 0 },
    mr: "auto",
  };
  const section6BulletImageContainer = {
    minWidth: "40px",
    width: "40px",
    height: "40px",
  };
  const section6BulletTextContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  };
  const section6BulletTitle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: "#434349",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.44px",
  };
  const section6BulletDescription = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: "#8A8A95",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.352px",
  };
  const section7Style = {
    width: "100%",
    paddingTop: { xs: "46px", sm: "111px" },
    paddingBottom: { xs: "45px", sm: "102px" },
    // bgcolor: "#3C1C8F",
    background: "linear-gradient(-45deg, #3C1C8F, #5E96B0)",
  };
  const section7Title = {
    fontFamily: "'Passion One', cursive",
    fontWeight: { xs: 400, sm: 700 },
    fontSize: { xs: "48px", sm: "80px" },
    lineHeight: { xs: "38.4px", sm: "72px" },
    letterSpacing: { xs: "-1.056px", sm: "-1.76px" },
    textTransform: "uppercase",
    textAlign: "center",
    color: "white",
  };
  const section7Description = {
    color: "white",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: { xs: "16px", md: "25px" },
    lineHeight: { xs: "24px", md: "37.5px" },
    letterSpacing: { xs: "-0.352px", md: "-0.55px" },
    textAlign: "center",
    mt: "15px",
  };
  const section7Column = {
    gridColumn: { xs: "span 12", sm: "span 4" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: { xs: "385px", sm: "305px" },
    margin: "0 auto",
  };
  const section7BulletContainer = {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    gap: "20px",
  };
  const section7BulletImageContainer = {
    minWidth: "40px",
    width: "40px",
    height: "40px",
  };
  const section7BulletTextContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  };
  const section7BulletTitle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    color: "white",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.44px",
  };
  const section7BulletDescription = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.352px",
  };
  const section8Style = {
    width: "100%",
    paddingTop: { xs: "46px", sm: "131px" },
    paddingBottom: { xs: "42px", sm: "81px" },
    px: "15px",
    bgcolor: "white",
    // backgroundImage: {
    //   xs: `url(${Section8BgMobile.src})`,
    //   sm: `url(${Section8Bg.src})`,
    // },
    // backgroundPosition: { xs: "bottom center", sm: "bottom left" },
    // backgroundRepeat: "no-repeat",
  };
  const section8Title = {
    fontFamily: "'Passion One', cursive",
    fontWeight: { xs: 400, sm: 700 },
    fontSize: { xs: "48px", sm: "80px" },
    lineHeight: { xs: "38.4px", sm: "76px" },
    letterSpacing: { xs: "-1.056px", sm: "-1.76px" },
    textTransform: "uppercase",
    textAlign: "center",
    color: "#0F0F43",
  };
  const section8Description = {
    textAlign: "center",
    color: "#434349",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: { xs: "16px", sm: "25px" },
    lineHeight: { xs: "24px", sm: "37.5px" },
    letterSpacing: { xs: "-0.352px", sm: "-0.55px" },
    my: { xs: "20px", sm: "41px" },
  };
  const section8Button = {
    p: "22px 33px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.44px",
    bgcolor: "#3C1C8F",
    color: "white",
    // border: "1px solid",
    // borderColor: "white",
    "&:hover": {
      // bgcolor: "white",
      // color: "#3C1C8F",
      // borderColor: "#3C1C8F",
      bgcolor: "#6C3CFF",
    },
  };
  const footerContainer = {
    alignSelf: "stretch",
    bgcolor: "#3C1C8F",
    px: "15px",
    pt: { xs: "93px", sm: "120.5px" },
    pb: { xs: "40px", sm: "153.5px" },
  };
  const footerTitle = {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "'Passion One', cursive",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "36px",
    letterSpacing: "-0.88px",
    textAlign: { xs: " center", sm: "left" },
  };
  const footerColumn = {
    gridColumn: { xs: "span 12", sm: "span 4" },
    maxWidth: { xs: "385px", sm: "295px" },
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "flex-start" },
    gap: "20px",
    margin: "0 auto",
  };
  const footerLinksContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "flex-start" },
    gap: "10px",
    alignSelf: "stretch",
  };
  const footerLink = {
    justifyContent: { xs: "center", sm: "flex-start" },
    p: 0,
    color: "white",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "-0.352px",
    transition: "all 0.5s ease",
    "&:hover": {
      bgcolor: "transparent",
      opacity: 0.75,
    },
  };

  return (
    <>
      <Head>
        <title>Piere</title>
        <style>
          {`
            @keyframes bounce {
              0%   { transform: translateY(0); }
              50%  { transform: translateY(-50px); }
              100% { transform: translateY(0); }
            }
            svg {
              width: 100%;
              height: 100%
            }
          `}
        </style>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      
      <Script
        id="prefineryScript1"
        dangerouslySetInnerHTML={{
          __html: `prefinery=window.prefinery||function(){(window.prefinery.q=window.prefinery.q||[]).push(arguments)};`,
        }}
      />
      <Script
        id="prefineryScript2"
        src="https://widget.prefinery.com/widget/v2/pwy96r5u.js"
        defer
      />

      {/* Header */}
      <Box sx={headerContainer}>
        <NextLink href={"/"} passHref>
          <Button
            component={"a"}
            sx={{ ...logoButton,
             p: 0, width: "100px", height: "33px" }}
          >
            <Image src={PiereLogoWhite} alit={"Piere Logo"} />
          </Button>
        </NextLink>
        {media1024Up ? (
          <>
            <Box sx={headerLinksContainer}>
              <NextLink href={"#Share"} passHref>
                <Button variant="text" sx={headerLink}>
                  Share
                </Button>
              </NextLink>
              <NextLink href={"#Dream"} passHref>
                <Button variant="text" sx={headerLink}>
                  Dream
                </Button>
              </NextLink>
              <NextLink href={"#Budget"} passHref>
                <Button variant="text" sx={headerLink}>
                  Budget
                </Button>
              </NextLink>
              <NextLink href={"#Chat"} passHref>
                <Button variant="text" sx={headerLink}>
                  Chat
                </Button>
              </NextLink>
              <NextLink href={"#Connect"} passHref>
                <Button variant="text" sx={headerLink}>
                  Connect
                </Button>
              </NextLink>
              <Button
                variant="text"
                sx={headerLink}
                onClick={handleOpenWaitList}
              >
                Join Us
              </Button>
            </Box>
            <Box sx={headerSocialLinksContainer}>
              <Button
                component={"a"}
                href={"https://twitter.com/piereapp"}
                target={"blank"}
                sx={headerSocialLink}
              >
                <Image src={TwitterIcon} alt={"Twitter Icon"} />
                
              </Button>
              <Button
                component={"a"}
                href={"https://facebook.com/piereapp"}
                target={"blank"}
                sx={headerSocialLink}
              >
                <Image src={FacebookIcon} alt={"Facebook Icon"} />
                
              </Button>
              <Button
                component={"a"}
                href={"https://tiktok.com/@pieremoney"}
                target={"blank"}
                sx={headerSocialLink}
              >
                <Image src={TikTokIcon} alt={"TikTok Icon"} />
                
              </Button>
              <Button
                component={"a"}
                href={"https://instagram.com/piereapp"}
                target={"blank"}
                sx={headerSocialLink}
              >
                <Image src={InstagramIcon} alt={"Instagram Icon"} />
              </Button>
            </Box>
          </>
        ) : (
          <Box>
            <Button
              component={"a"}
              sx={hamburgerOpenCloseButton}
              onClick={handleOpenMenu}
            >
              <Image src={HamburgerMenu} alt={"Hamburger Menu"} />
            </Button>
          </Box>
        )}
      </Box>

      {/* Section 1 */}
      <Box id="section1" sx={section1Style}>
        <Grid container justifyContent="center" sx={gridStyle}>
          <Grid item xs={12} md={10}>
            <Typography sx={section1Title}>
              Unlock Your Money’s Full Potential
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ ...boxGridStyling, gridAutoRows: "auto" }}>
            {
              
              <Box
                sx={{
                  ...section1Column,
                  pt: { xs: "40px", sm: "150px" },
                  order: { xs: 2, sm: "initial" },
                }}
              >
                <Box sx={section1SeeBelowContainer}>
                  <Typography sx={section1SeeBelowText}>See Below</Typography>
                  <Box sx={{ width: "30px", height: "30px" }}>
                    <Image src={ArrowDownIcon} alt={"Arrow Down Icon"} />
                    {/* <ArrowDownIcon /> */}
                  </Box>
                </Box>
              </Box>
              
            }
            <Box
              sx={{
                ...section1Column,
                position: "sticky",
                alignSelf: "start",
                top: "15px",
                order: { xs: 3, sm: "initial" },
              }}
            >
              <Image
                src={require("../public/images/landing-page/section1-phone-new.gif")}
                alt="Unlock Your Money’s Full Potential"
                priority
              />
            </Box>
            <Box sx={{ ...section1Column, order: { xs: 1, sm: "initial" } }}>
              <Box sx={waitListContainer}>
                <Typography
                  sx={{ ...hamburgerLink, alignSelf: "stretch", "&:hover": {} }}
                >
                  Piere is coming soon!
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    ...hamburgerLink,
                    alignSelf: "stretch",
                    bgcolor: "white",
                    color: "#434349",
                    "&:hover": {
                      bgcolor: "#6C3CFF",
                      color: "white",
                    },
                  }}
                  onClick={handleOpenWaitList}
                >
                  Join The Waitlist
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                gridColumn: "span 12",
                height: { xs: "60vh", sm: "30vh" },
                order: { xs: 4, sm: "initial" },
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Section 2 */}
      <Box id="section2" sx={section2Style}>
        <Grid container justifyContent="center" sx={gridStyle}>
          <Grid item xs={12} md={10} sx={{ mb: { xs: "53px", sm: "81px" } }}>
            <Typography sx={section2Title}>
              Meet the <span style={gradientTitleSpan}>intelligent</span> way to
              manage money.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={boxGridStyling}>
            <Box sx={section2Column}>
              <Typography sx={section2Subtitle}>Share Payments</Typography>
              <Typography sx={section2Description}>
                Seamlessly split dinner, group outings or shared household
                expenses with friends and family, directly from your
                transactions
              </Typography>
              <Image src={Section2SharePayments} alt="Share Payments" />
              
            </Box>
            <Box sx={section2Column}>
              <Typography sx={section2Subtitle}>
                Reconcile, Automatically
              </Typography>
              <Typography sx={section2Description}>
                Automatic payment reconciliation analyzes your peer-to-peer
                payments, then matches incoming payments with the original
                shared transaction
              </Typography>
              
              <Image
                src={require("../public/images/landing-page/section2-reconcile-automatically-new.png")}
                alt="Reconcile Automatically"
                placeholder="blur"
                loading="lazy"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sx={boxGridStyling}>
            <Box sx={section2Column}>
              <Typography sx={section2Subtitle}>Keep On Track</Typography>
              <Typography sx={section2Description}>
                Your personal goals with real-time insights gently guide you to
                staying on track, and your budget is automatically adjusted as
                your goals change
              </Typography>
              <Image src={Section2KeepOnTrack} alt="Keep On Track" />
              
            </Box>
            <Box sx={section2Column}>
              <Typography sx={section2Subtitle}>Get Answers</Typography>
              <Typography sx={section2Description}>
                Chat With Piere is the entire world of financial guidance at
                your command, constantly learning from your unique budget and
                finances
              </Typography>
              <Image src={Section2GetAnswers} alt="Get Answers" />
              
            </Box>
          </Grid>
          <Grid item xs={12} sx={section2Card}>
            <Box sx={{ width: "40px", height: "40px", m: "0 auto" }}>
              <Image src={Section2SecurityFirst} alt="Security First" />
              
            </Box>
            <Typography sx={{ ...section2Subtitle, mt: "20px" }}>
              Security First
            </Typography>
            <Typography sx={section2CardDescription}>
              Regular financial security audits ensure your data is secure,
              while several layers of encryption ensure your data is protected,
              both at rest and in transit
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Section 3 */}
      <Box id="Share" sx={section3Style}>
        <Grid container justifyContent="center" sx={gridStyle}>
          <Grid
            item
            xs={12}
            sx={{
              ...boxGridStyling,
              gridAutoRows: { xs: "auto" },
              mb: { xs: "60px" },
            }}
          >
            <Box sx={section3Column}>
              <Typography sx={section3Title}>Payments your way</Typography>
            </Box>
            <Box sx={section3Column}>
              <Typography sx={section3Description}>
                Picked up the bill at dinner? Collect repayment from everyone at
                the table in a snap, while Piere automatically matches their
                incoming digital payments to your original transaction.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              ...boxGridStyling,
              gridAutoRows: { xs: "auto" },
            }}
          >
            <Box sx={section3Column}>
              <Box sx={section3BulletContainer}>
                <Box sx={section3BulletImageContainer}>
                  <Image src={Section3SplitChecksDoneRight} alt="Split Checks, Done Right" />
                  {/* <Section3SplitChecksDoneRight /> */}
                </Box>
                <Box sx={section3BulletTextContainer}>
                  <Typography sx={section3BulletTitle}>
                    Split Checks, Done Right
                  </Typography>
                  <Typography sx={section3BulletDescription}>
                    Split a single transaction with all of your friends,
                    instantly
                  </Typography>
                </Box>
              </Box>
              <Box sx={section3BulletContainer}>
                <Box sx={section3BulletImageContainer}>
                <Image src={Section3BundledWithEase} alt="Bundle with ease" />
                  {/* <Section3BundledWithEase /> */}
                </Box>
                <Box sx={section3BulletTextContainer}>
                  <Typography sx={section3BulletTitle}>
                    Bundled With Ease
                  </Typography>
                  <Typography sx={section3BulletDescription}>
                    Combine multiple past transactions to share all at once
                  </Typography>
                </Box>
              </Box>
              <Box sx={section3BulletContainer}>
                <Box sx={section3BulletImageContainer}>
                <Image src={Section3SimpleRepayments} alt="Simple repayments" />
                  {/* <Section3SimpleRepayments /> */}
                </Box>
                <Box sx={section3BulletTextContainer}>
                  <Typography sx={section3BulletTitle}>
                    Simple Repayments
                  </Typography>
                  <Typography sx={section3BulletDescription}>
                    Friends can repay you without needing to install Piere
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ ...section3Column, width: "100%", alignSelf: "flex-end" }}
            >
              <Image src={Section3PaymentsYourWay} alt="Payments your way" />
              {/* <Section3PaymentsYourWay /> */}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Section 4 */}
      <Box id="Dream" sx={section4Style}>
        <Grid
          container
          justifyContent="center"
          sx={{ ...gridStyle, px: "15px" }}
        >
          <Grid item xs={12} md={10}>
            <Box
              sx={{ maxWidth: { xs: "488px", sm: "100%" }, margin: "0 auto" }}
            >
              <Typography sx={section4Title}>
                Clearer <span style={gradientTitleSpan}>Goals</span> Tracking
                <sup style={superscriptStyling}> 1</sup>
              </Typography>
              <Typography sx={section4Description}>
                Set financial and lifestyle goals using income and expense data
                from all your linked accounts, while Piere’s AI engine keeps you
                on track.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              ...boxGridStyling,
              gridAutoRows: { xs: "auto" },
              mt: { xs: "63px", sm: "126px" },
              mb: { xs: "99px", sm: "124px" },
            }}
          >
            <Box sx={section4Column}>
              <Box sx={section4BulletContainer}>
                <Box sx={section4BulletImageContainer}>
                  <Image src={Section4ARicherPotential} alt="A Richer Potential" />
                  {/* <Section4ARicherPotential /> */}
                </Box>
                <Box sx={section4BulletTextContainer}>
                  <Typography sx={section4BulletTitle}>
                    A Richer Potential
                  </Typography>
                  <Typography sx={section4BulletDescription}>
                    Reimagine your life by setting goals from traveling more to
                    early retirement
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={section4Column}>
              <Box sx={section4BulletContainer}>
                <Box sx={section4BulletImageContainer}>
                  <Image src={Section4RealTimeInsights} alt="Real-time Insights" />
                  {/* <Section4RealTimeInsights /> */}
                </Box>
                <Box sx={section4BulletTextContainer}>
                  <Typography sx={section4BulletTitle}>
                    Real-time Insights
                  </Typography>
                  <Typography sx={section4BulletDescription}>
                    Stay on track with insights and alerts that respond to
                    changes in your behaviors
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={section4Column}>
              <Box sx={section4BulletContainer}>
                <Box sx={section4BulletImageContainer}>
                  <Image src={Section4LifeWithoutLimits} alt="Life Without Limits" />
                  {/* <Section4LifeWithoutLimits /> */}
                </Box>
                <Box sx={section4BulletTextContainer}>
                  <Typography sx={section4BulletTitle}>
                    Life Without Limits
                  </Typography>
                  <Typography sx={section4BulletDescription}>
                    Prioritize goals that expand health, wellness, and work-life
                    balance
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Image src={Section4ClearerGoalsTracking} alt="Clearer Goals Tracking" />
            {/* <Section4ClearerGoalsTracking /> */}
          </Grid>
        </Grid>
      </Box>

      {/* Section 5 */}
      <Box id="Budget" sx={section5Style}>
        <Grid container justifyContent="center" sx={gridStyle}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ ...section5Column, maxWidth: "485px" }}>
              <Typography sx={section5Title}>
                Budget With Brains<sup style={superscriptStyling}> 1</sup>
              </Typography>
              <Typography sx={section5Description}>
                With your goals in mind, Piere constantly optimizes your budget
                and provides personalized insights to empower you to enjoy your
                life.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={section5Column}>
              <Box sx={section5BulletContainer}>
                <Box sx={section5BulletImageContainer}>
                  <Image src={Section5CategoryMatching} alt="Category Matching" />
                  {/* <Section5CategoryMatching /> */}
                </Box>
                <Box sx={section5BulletTextContainer}>
                  <Typography sx={section5BulletTitle}>
                    Category Matching
                  </Typography>
                  <Typography sx={section5BulletDescription}>
                    Eliminate uncategorized transactions with automated payment
                    matches
                  </Typography>
                </Box>
              </Box>
              <Box sx={section5BulletContainer}>
                <Box sx={section5BulletImageContainer}>
                  <Image src={Section5AutomatedBudgeting} alt="Automated Budgeting" />
                  {/* <Section5AutomatedBudgeting /> */}
                </Box>
                <Box sx={section5BulletTextContainer}>
                  <Typography sx={section5BulletTitle}>
                    Automated Budgeting
                  </Typography>
                  <Typography sx={section5BulletDescription}>
                    Piere will automatically create, then adjust your budget as
                    time goes on
                  </Typography>
                </Box>
              </Box>
              <Box sx={section5BulletContainer}>
                <Box sx={section5BulletImageContainer}>
                  <Image src={Section5ActionableTrends} alt="Actionable Trends" />
                  {/* <Section5ActionableTrends /> */}
                </Box>
                <Box sx={section5BulletTextContainer}>
                  <Typography sx={section5BulletTitle}>
                    Actionable Trends
                  </Typography>
                  <Typography sx={section5BulletDescription}>
                    Get suggestions that help optimize your spending, based on
                    activities you love
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sx={section5Banner}>
            {smUp ? (
              <Image src={Section5BudgetWithBrains} alt="Budget With Brains" />
              // <Section5BudgetWithBrains />
            ) : (
              <Image src={Section5BudgetWithBrainsMobile} alt="Budget With Brains" />
              // <Section5BudgetWithBrainsMobile />
            )}
          </Grid>
        </Grid>
      </Box>

      {/* Section 6 */}
      <Box id="Chat" sx={section6Style}>
        <Grid container justifyContent="center" sx={gridStyle}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ ...section6Column, maxWidth: "488px" }}>
              <Typography sx={section6Title}>
                <span style={gradientTitleSpan}>Chat</span> With Piere
                <sup style={superscriptStyling}> 1</sup>
              </Typography>
              <Typography sx={section6Description}>
                Ask the most advanced financial AI how to optimize your personal
                budget and spending, then receive insights that can lead to a
                richer future.
              </Typography>
              <Box sx={section6BulletContainer}>
                <Box sx={section6BulletImageContainer}>
                  <Image src={Section6AnswersToTrust} alt="Answers To Trust" />
                  {/* <Section6AnswersToTrust /> */}
                </Box>
                <Box sx={section6BulletTextContainer}>
                  <Typography sx={section6BulletTitle}>
                    Answers To Trust
                  </Typography>
                  <Typography sx={section6BulletDescription}>
                    Ask specific questions about your budget or goals, and get
                    customized, expert guidance
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ ...section6BulletContainer, my: "40px" }}>
                <Box sx={section6BulletImageContainer}>
                  <Image src={Section6PersonalizedAi} alt="Personalized AI" />
                  {/* <Section6PersonalizedAi /> */}
                </Box>
                <Box sx={section6BulletTextContainer}>
                  <Typography sx={section6BulletTitle}>
                    Personalized AI
                  </Typography>
                  <Typography sx={section6BulletDescription}>
                    Piere uses a customized artificial intelligence model,
                    trained from your own financial data
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ ...section6BulletContainer, mb: { xs: "47px", sm: 0 } }}
              >
                <Box sx={section6BulletImageContainer}>
                  <Image src={Section6AlwaysUpToDate} alt="Always Up-to-date" />
                  {/* <Section6AlwaysUpToDate /> */}
                </Box>
                <Box sx={section6BulletTextContainer}>
                  <Typography sx={section6BulletTitle}>
                    Always Up-to-date
                  </Typography>
                  <Typography sx={section6BulletDescription}>
                    Ask Piere about loan rates or how to reduce debt, and get
                    personalized answers from real-time sources
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ alignSelf: "center" }}>
            <Box
              sx={{
                ...section6Column,
                textAlign: "center",
                pl: { xs: 0, sm: "20px" },
              }}
            >
              <Image src={Section6ChatWithPiere} alt="Chat With Piere" />
              {/* <Section6ChatWithPiere /> */}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Section 7 */}
      <Box id="Connect" sx={section7Style}>
        <Grid
          container
          justifyContent="center"
          sx={{ ...gridStyle, px: "15px" }}
        >
          <Grid item xs={12} md={10}>
            <Box
              sx={{ maxWidth: { xs: "488px", sm: "100%" }, margin: "0 auto" }}
            >
              <Typography sx={section7Title}>One App, Endless Uses</Typography>
              <Typography sx={section7Description}>
                Replace a home screen full of payment, budgeting, and banking
                apps with Piere, providing a unified hub for all your finances.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              ...boxGridStyling,
              gridAutoRows: { xs: "auto" },
              mt: { xs: "40px", sm: "126px" },
              mb: { xs: "24px", sm: "182px" },
            }}
          >
            <Box sx={section7Column}>
              <Box sx={section7BulletContainer}>
                <Box sx={section7BulletImageContainer}>
                  <Image src={Section7YourBankWithPiere} alt="Your Bank With Piere" />
                  {/* <Section7YourBankWithPiere /> */}
                </Box>
                <Box sx={section7BulletTextContainer}>
                  <Typography sx={section7BulletTitle}>
                    Your Bank, With Piere
                  </Typography>
                  <Typography sx={section7BulletDescription}>
                    99.9% of banks in the U.S. are supported, including yours
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={section7Column}>
              <Box sx={section7BulletContainer}>
                <Box sx={section7BulletImageContainer}>
                  <Image src={Section7UnderstandYourDebts} alt="Understand Your Debts" />
                  {/* <Section7UnderstandYourDebts /> */}
                </Box>
                <Box sx={section7BulletTextContainer}>
                  <Typography sx={section7BulletTitle}>
                    Understand Your Debts
                  </Typography>
                  <Typography sx={section7BulletDescription}>
                    Include your credit card and loan accounts for more insights
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={section7Column}>
              <Box sx={section7BulletContainer}>
                <Box sx={section7BulletImageContainer}>
                  <Image src={Section7BuiltSecure} alt="Built Secure" />
                  {/* <Section7BuiltSecure /> */}
                </Box>
                <Box sx={section7BulletTextContainer}>
                  <Typography sx={section7BulletTitle}>Built Secure</Typography>
                  <Typography sx={section7BulletDescription}>
                    Bank-level security audits keep your data safe
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ ...gridStyle, px: "15px", textAlign: "center" }}>
          {smUp ? (
            <Image src={Section7OneAppEndlessUses} alt="One App, Endless Uses" />
            // <Section7OneAppEndlessUses />
          ) : (
            <Image src={Section7OneAppEndlessUsesMobile} alt="One App, Endless Uses" />
            // <Section7OneAppEndlessUsesMobile />
          )}
        </Box>
      </Box>

      {/* Section 8 */}
      <Box id="section8" sx={section8Style}>
        <Grid container justifyContent="center" sx={gridStyle}>
          <Grid item xs={12} md={10}>
            <Box
              sx={{ maxWidth: { xs: "488px", sm: "100%" }, margin: "0 auto" }}
            >
              <Typography sx={section8Title}>
                <sup style={superscriptStyling}>1 </sup>These and other{" "}
                <span style={gradientTitleSpan}>great features</span>, coming
                soon!
              </Typography>
              <Typography sx={section8Description}>
                Piere is launching with a full suite of tools designed to
                empower your lifestyle and finances. Certain features, like Chat
                With Piere, will be launching soon. Get on the waitlist and be
                among the first to know when new features are released.
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={section8Button}
                  onClick={handleOpenWaitList}
                >
                  Join The Waitlist
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    
    </>
  );
};

export default LandingPage;

