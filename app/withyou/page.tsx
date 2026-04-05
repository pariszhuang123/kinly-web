import { redirect } from "next/navigation";
import { WITHYOU_DEFAULT_SLUG } from "../../lib/withyou";

export default function WithYouIndexPage() {
  redirect(`/withyou/${WITHYOU_DEFAULT_SLUG}`);
}
