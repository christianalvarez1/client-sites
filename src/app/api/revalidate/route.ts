import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Purge cached site content after editing rows in Supabase:
 *
 *   POST /api/revalidate?secret=...&tag=site:<siteId>
 *   POST /api/revalidate?secret=...&tag=domain:<hostname>
 *
 * Pass multiple tag params to purge several at once.
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const tags = req.nextUrl.searchParams.getAll("tag");
  if (tags.length === 0) {
    return NextResponse.json({ error: "Missing tag param" }, { status: 400 });
  }

  for (const tag of tags) {
    revalidateTag(tag, "max");
  }
  return NextResponse.json({ revalidated: tags });
}
