**Select** — styled dropdown for role, location and shift-window choices.

```jsx
<Select label="Preferred location"
        placeholder="Choose a city"
        options={["Greater Los Angeles", "San Diego", "San José", "New York City"]}
        value={loc} onChange={e => setLoc(e.target.value)} />
```
