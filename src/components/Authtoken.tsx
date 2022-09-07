// wrapper
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

interface IProps {
  children: any;
  redirectTo: string;
}

const VALID_PARAM = "?token=f3823903b2dd6e35243b1bbe5a14f651";

export default function Authtoken(props: IProps) {
  let navigate = useNavigate();
  const requestedPath = useLocation().pathname;
  const parameter = useLocation().search;

  console.log(requestedPath);

  console.log(useLocation().search);

  if (parameter.includes(VALID_PARAM)) {
    return props.children;
  }
  return <Navigate to={props.redirectTo} />;
}
