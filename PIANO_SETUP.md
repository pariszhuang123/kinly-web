# Piano Page Setup

This route is live at `/piano`, but two real-world inputs are still needed for the final experience:

1. The three real YouTube videos
2. The email settings for immediate lead notifications

## Video links

Set these in `.env.local`:

```env
NEXT_PUBLIC_PIANO_VIDEO_CLASSICAL_URL="https://www.youtube.com/watch?v=..."
NEXT_PUBLIC_PIANO_VIDEO_CHILDREN_URL="https://youtu.be/..."
NEXT_PUBLIC_PIANO_VIDEO_WEDDING_URL="https://www.youtube.com/watch?v=..."
```

Normal YouTube watch links, `youtu.be` links, `shorts` links, and embed links are all accepted. The app will normalize them to privacy-friendly embed URLs automatically.

## Lead notification email

The form stores the lead through `public.leads_upsert_v1`, then attempts to email you immediately through Resend.

Set these in `.env.local`:

```env
PIANO_NOTIFY_TO_EMAIL="your-real-inbox@example.com"
PIANO_NOTIFY_FROM_EMAIL="verified-sender@yourdomain.com"
RESEND_API_KEY="re_xxxxxxxxxxxxx"
```

Notes:

- `PIANO_NOTIFY_TO_EMAIL` is where new lesson enquiries will be sent
- `PIANO_NOTIFY_FROM_EMAIL` must be a sender Resend accepts for your account/domain
- the lead is still stored even if notification email is not configured or fails

## Verification

After adding the real values, run:

```bash
npm run check:all
npm run build
npm run e2e
```

Then open `/piano` and verify:

- the three correct videos appear
- the placeholder warning is gone
- a test submission reaches your inbox
