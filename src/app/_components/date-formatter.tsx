import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  if (dateString) {
    console.log("dateString: " + dateString);
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
  } else {
    return "";
  }
};

export default DateFormatter;
