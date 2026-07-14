**Button** — the program's pill-shaped call-to-action; use for "Become a Volunteer", form submits and any primary action.

```jsx
<Button variant="gold" size="lg" pop iconRight={<Icon name="arrow-right" />}>
  Become a Volunteer
</Button>
```

Variants: `primary` (civic blue), `gold` (marigold, highest-energy CTA), `dark` (ink), `outline`, `ghost`. Sizes `sm | md | lg`. Add `pop` for the hard sticker shadow that presses down on click; `block` for full width; `shape="rounded"` to drop the pill.
