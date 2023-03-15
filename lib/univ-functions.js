"use client";
const CheckAlphaOnly = (val) => {
  const alphaOnly = new RegExp("^[A-Za-zا-ے ]*$");
  return alphaOnly.test(val);
};
const CheckEngAlphaOnly = (val) => {
  const alphaOnly = new RegExp("^[A-Za-z ]*$");
  return alphaOnly.test(val);
};
const CheckUrAlphaOnly = (val) => {
  const alphaOnly = new RegExp("^[ا-ے ]*$");
  return alphaOnly.test(val);
};
const CheckNumberOnly = (val) => {
  const NumbOnly = new RegExp("^[0-9]*$");
  const CheckEngAlphaOnly = (val) => {
    const alphaOnly = new RegExp("^[A-Za-z ]*$");
    return alphaOnly.test(val);
  };
  const CheckUrAlphaOnly = (val) => {
    const alphaOnly = new RegExp("^[ا-ے ]*$");
    return alphaOnly.test(val);
  };
  const CheckNumberOnly = (val) => {
    const NumbOnly = new RegExp("^[0-9]*$");
    if (val === "") {
      return true;
    }
    return NumbOnly.test(val);
  };

  if (val === "") {
    return true;
  }
  return NumbOnly.test(val);
};

const GetMonth = (MonthNumb) => {
  if (MonthNumb === 1) return "January";
  else if (MonthNumb === 2) return "February";
  else if (MonthNumb === 3) return "March";
  else if (MonthNumb === 4) return "April";
  else if (MonthNumb === 5) return "May";
  else if (MonthNumb === 6) return "June";
  else if (MonthNumb === 7) return "July";
  else if (MonthNumb === 8) return "August";
  else if (MonthNumb === 9) return "September";
  else if (MonthNumb === 10) return "October";
  else if (MonthNumb === 11) return "November";
  else if (MonthNumb === 12) return "December";
  else return MonthNumb;
};

const HtmlToPlain = (html) => {
  if (!!html) {
    html = html.replace(/<style([\s\S]*?)<\/style>/gi, "");
    html = html.replace(/<script([\s\S]*?)<\/script>/gi, "");
    html = html.replace(/<\/div>/gi, "\n");
    html = html.replace(/<\/li>/gi, "\n");
    html = html.replace(/<li>/gi, "  *  ");
    html = html.replace(/<\/ul>/gi, "\n");
    html = html.replace(/<\/p>/gi, "\n");
    html = html.replace(/<br\s*[\/]?>/gi, "\n");
    html = html.replace(/<[^>]+>/gi, "");
    html = html.split("&nbsp;").join(" ");
    return html;
  } else {
    return;
  }
};

const isUrdu = (txt) => {
  txt = HtmlToPlain(txt);
  if (txt === undefined) {
    return "ltrStyle";
  } else {
    return txt.charCodeAt(1) > 200 ||
      txt.charCodeAt(2) > 200 ||
      txt.charCodeAt(3) > 200 ||
      txt.charCodeAt(4) > 200 ||
      txt.charCodeAt(5) > 200 ||
      txt.charCodeAt(6) > 200 ||
      txt.charCodeAt(7) > 200
      ? true
      : false;
  }
};
const StyleRemover = (html) => {
  html = html.replace(/<style([\s\S]*?)<\/style>/gi, "");
  html = html.replace(/style="[a-zA-Z0-9:;&\."\s\(\)\-\,]*|\\/gi, "");
  return html;
};
const GetStyle = (txt) => {
  if (txt === undefined) {
    return "ltrStyle";
  } else {
    let Startingposition = txt.indexOf("<p>", 0) + 3;
    if (Startingposition >= 3) {
      return txt.charCodeAt(Startingposition + 0) > 200 ||
        txt.charCodeAt(Startingposition + 1) > 200 ||
        txt.charCodeAt(Startingposition + 2) > 200 ||
        txt.charCodeAt(Startingposition + 3) > 200 ||
        txt.charCodeAt(Startingposition + 4) > 200 ||
        txt.charCodeAt(Startingposition + 5) > 200 ||
        txt.charCodeAt(Startingposition + 6) > 200
        ? "rtlStyle"
        : "ltrStyle";
    } else {
      return txt.charCodeAt(1) > 200 ||
        txt.charCodeAt(2) > 200 ||
        txt.charCodeAt(3) > 200 ||
        txt.charCodeAt(4) > 200 ||
        txt.charCodeAt(5) > 200 ||
        txt.charCodeAt(6) > 200 ||
        txt.charCodeAt(7) > 200
        ? `rtlStyle`
        : `ltrStyle`;
    }
  }
};
const GetStyle100 = (txt) => {
  if (txt === undefined) {
    return "ltrStyle";
  } else {
    let Startingposition = txt.indexOf("<p>", 0) + 3;
    if (Startingposition >= 3) {
      return txt.charCodeAt(Startingposition + 1) > 200 ||
        txt.charCodeAt(Startingposition + 2) > 200 ||
        txt.charCodeAt(Startingposition + 3) > 200 ||
        txt.charCodeAt(Startingposition + 4) > 200 ||
        txt.charCodeAt(Startingposition + 5) > 200 ||
        txt.charCodeAt(Startingposition + 6) > 200 ||
        txt.charCodeAt(Startingposition + 7) > 200
        ? "rtlStyle100"
        : "ltrStyle100";
    } else {
      return txt.charCodeAt(1) > 200 ||
        txt.charCodeAt(2) > 200 ||
        txt.charCodeAt(3) > 200 ||
        txt.charCodeAt(4) > 200 ||
        txt.charCodeAt(5) > 200 ||
        txt.charCodeAt(6) > 200 ||
        txt.charCodeAt(7) > 200
        ? "rtlStyle100"
        : "ltrStyle100";
    }
  }
};
const cl = (txt) => {
  // console.log(txt);
};

const GetDate = (ThisDate) => {
  if (!CheckNumberOnly(ThisDate)) {
    ThisDate = parseInt(ThisDate, 16);
  }

  let StdDate = new Date(Number(ThisDate) * 1000);
  let RegDate = StdDate.getDate();
  let RegMonth = StdDate.getMonth() + 1;
  let RegYear = StdDate.getUTCFullYear();
  let RegHours = StdDate.getHours() % 12;
  if (RegHours === 0) {
    RegHours = 12;
  }
  let RegMinutes =
    StdDate.getMinutes() < 10
      ? "0" + StdDate.getMinutes()
      : StdDate.getMinutes();
  let AMPMDecision = StdDate.getHours() > 12 ? "PM " : "AM ";

  return (
    GetMonth(RegMonth) + "  " + RegDate + ", " + RegYear
    // " - " +
    // RegHours +
    // "." +
    // RegMinutes +
    // AMPMDecision
  );
};
const GetDateHexa = (ThisDate) => {
  ThisDate = parseInt(ThisDate, 16);

  //   console.log(Number(ThisDate));
  let StdDate = new Date(Number(ThisDate) * 1000);
  //   console.log(Number(ThisDate) * 1000);
  let RegDate = StdDate.getDate();
  let RegMonth = StdDate.getMonth() + 1;
  let RegYear = StdDate.getUTCFullYear();
  let RegHours = StdDate.getHours() % 12;
  if (RegHours === 0) {
    RegHours = 12;
  }
  let RegMinutes =
    StdDate.getMinutes() < 10
      ? "0" + StdDate.getMinutes()
      : StdDate.getMinutes();
  let AMPMDecision = StdDate.getHours() > 12 ? "PM " : "AM ";

  return (
    GetMonth(RegMonth) + "  " + RegDate + ", " + RegYear
    // " - " +
    // RegHours +
    // "." +
    // RegMinutes +
    // AMPMDecision
  );
};
export { GetDate, GetDateHexa, HtmlToPlain, StyleRemover };
