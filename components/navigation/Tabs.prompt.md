**Tabs** — section navigation for the roles browser and portal. `underline` for page sections, `pill` for compact filters.

```jsx
<Tabs tabs={["Olympic", "Paralympic", "Year-round"]} defaultValue="Olympic" onChange={setView} />
<Tabs variant="pill" tabs={[{value:"all",label:"All roles"},{value:"access",label:"Accessibility"}]} />
```
