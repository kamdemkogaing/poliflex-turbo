import { useMemo, useState } from "react";

export default function PoliFlexTurboSamplePage() {
  const allColors = [
    { code: "4901", name: "White", swatch: "#f5f5f5" },
    { code: "4991", name: "Black", swatch: "#1f1f1f" },
    { code: "4951", name: "Light Grey", swatch: "#cfcfcf" },
    { code: "4980", name: "Anthracite", swatch: "#4a4a4a" },
    { code: "4919", name: "Lemon Yellow", swatch: "#f4e04d" },
    { code: "4934", name: "Bright Yellow", swatch: "#f0c400" },
    { code: "4955", name: "Red", swatch: "#c62828" },
    { code: "4982", name: "Royal Blue", swatch: "#1e4fd1" },
    { code: "4965", name: "Navy", swatch: "#1f2f5a" },
    { code: "4977", name: "Mint", swatch: "#98e2d0" },
    { code: "4933", name: "Bright Lime", swatch: "#84cc16" },
    { code: "4914", name: "Purple", swatch: "#7c3aed" },
    {
      code: "4920",
      name: "Gold Metallic",
      swatch: "linear-gradient(135deg, #c69214, #f4d06f)",
    },
    {
      code: "4930",
      name: "Silver Metallic",
      swatch: "linear-gradient(135deg, #8d99ae, #edf2f4)",
    },
    {
      code: "4922",
      name: "Rose Gold",
      swatch: "linear-gradient(135deg, #b76e79, #f7cac9)",
    },
    {
      code: "4924",
      name: "Bright Copper",
      swatch: "linear-gradient(135deg, #b87333, #e6b89c)",
    },
    { code: "4940", name: "Neon Yellow", swatch: "#f6ff00" },
    { code: "4941", name: "Neon Green", swatch: "#39ff14" },
    { code: "4942", name: "Neon Orange", swatch: "#ff6a00" },
    { code: "4943", name: "Neon Pink", swatch: "#ff2bd6" },
  ];

  const sizes = [
    { label: "5 lfm x 50 cm", value: "5lfm-x-50cm", price: 26.0 },
    { label: "25 lfm x 50 cm", value: "25lfm-x-50cm", price: 119.0 },
  ];

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColorCode, setSelectedColorCode] = useState("4901");
  const [quantity, setQuantity] = useState(1);

  const selectedColor = useMemo(() => {
    return (
      allColors.find((color) => color.code === selectedColorCode) ||
      allColors[0]
    );
  }, [selectedColorCode]);

  const totalPrice = (selectedSize.price * quantity)
    .toFixed(2)
    .replace(".", ",");

  const articleSuffix = selectedSize.value.includes("25") ? "25" : "05";

  const SwatchButton = ({ color }) => {
    const isActive = selectedColorCode === color.code;

    return (
      <button
        type="button"
        onClick={() => setSelectedColorCode(color.code)}
        className={`group relative h-[1.3rem] rounded-md border transition ${
          isActive
            ? "border-black ring-2 ring-black"
            : "border-zinc-200 hover:border-zinc-400"
        }`}
        style={{ background: color.swatch }}
      >
        <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-lg group-hover:block">
          {color.code} - {color.name.toUpperCase()}
        </span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-[72px_minmax(0,1fr)]">
            <div className="hidden md:flex md:flex-col md:items-center md:gap-4">
              <button
                type="button"
                className="text-zinc-400 transition hover:text-zinc-700"
              >
                ▲
              </button>

              <div className="flex h-14 w-14 items-center justify-center rounded border border-zinc-300 bg-white p-1">
                <img
                  src="https://shop.printequipment.de/media/8b/bb/78/1749629557/po-tu-web-01.webp"
                  alt="POLI-FLEX TURBO Vorschaubild"
                  className="h-full w-full object-cover"
                />
              </div>

              <button
                type="button"
                className="text-zinc-400 transition hover:text-zinc-700"
              >
                ▼
              </button>
            </div>

            <div>
              <div className="overflow-hidden bg-white">
                <div className="aspect-square w-full">
                  <img
                    src="https://shop.printequipment.de/media/8b/bb/78/1749629557/po-tu-web-01.webp"
                    alt="POLI-FLEX TURBO"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <span className="inline-block h-3 w-3 rounded-full border border-zinc-700 bg-white" />
              </div>
            </div>
          </div>

          <div className="self-start">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                POLI-FLEX® TURBO®
              </h1>

              <div className="mt-6">
                <div className="text-4xl font-semibold">26,00 €*</div>
                <div className="mt-1 text-xs text-zinc-500">
                  Preise exkl. MwSt. zzgl. Versandkosten
                </div>
              </div>

              <div className="mt-4 text-sm font-semibold uppercase tracking-wide">
                Art-Nr: PO-TU-{selectedColor.code}-{articleSuffix}
              </div>

              <div className="mt-4 rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white">
                Verfügbarer Bestand: 35 Rll
              </div>

              <div className="mt-8">
                <div className="mb-3 text-sm font-bold">1: Größe PO-TU-</div>

                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => {
                    const active = selectedSize.value === size.value;

                    return (
                      <button
                        key={size.value}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-zinc-300 bg-white text-zinc-900 hover:border-zinc-500"
                        }`}
                      >
                        {size.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 text-sm font-bold">
                  2: Farben Flexfolie PO-TU-
                </div>

                <div className="overflow-visible rounded-md bg-white p-4 ring-1 ring-zinc-200">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {allColors.map((color) => (
                      <SwatchButton key={color.code} color={color} />
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <select
                    value={selectedColorCode}
                    onChange={(e) => setSelectedColorCode(e.target.value)}
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                  >
                    {allColors.map((color) => (
                      <option key={color.code} value={color.code}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-3 bg-white px-4 py-3 text-sm text-zinc-600 ring-1 ring-zinc-200">
                  <div className="font-semibold text-zinc-900">
                    Bitte wähle eine Farbe aus.
                  </div>
                  <div>Farben können vom Original abweichen.</div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-[94px_1fr_1fr]">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.max(1, Number.parseInt(e.target.value || "1", 10)),
                    )
                  }
                  className="h-12 rounded-full border border-zinc-300 bg-white px-4 text-sm outline-none"
                />

                <div className="flex h-12 items-center rounded-full bg-zinc-100 px-5 text-sm">
                  <span className="font-semibold">Rllpreis</span>
                  <span className="ml-3">--</span>
                </div>

                <div className="flex h-12 items-center rounded-full bg-zinc-100 px-5 text-sm">
                  <span className="font-semibold">Gesamtpreis</span>
                  <span className="ml-3">{totalPrice} €</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-black px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:opacity-90"
              >
                In den Warenkorb
              </button>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-700 transition hover:text-black"
              >
                <span>♡</span>
                <span>Zum Merkzettel hinzufügen</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee] py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:px-10 lg:grid-cols-2 lg:px-12">
          <div className="bg-white p-8">
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Produktinformationen
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-700">
              <p>
                POLI-FLEX® TURBO® ist eine gegossene Polyurethan-Folie mit einem
                Co-Polyester-Heißschmelzkleber. Dank des stark rückklebenden
                Trägers ist ein sicheres Positionieren einfach umsetzbar. Ebenso
                lassen sich feinste Details mühelos schneiden und entgittern.
              </p>

              <p>
                TURBO® Folien helfen durch kurze Übertragungszeit und niedrige
                Temperatur Energie zu sparen und Kosten zu senken.
              </p>

              <ul className="space-y-1">
                <li>- Erhältlich in 15 Farben</li>
                <li>
                  - Kurze Übertragungszeit und niedrige Temperatur
                  (Standard-Textilien: 130 °C für nur 5 Sekunden bzw. 160 °C für
                  nur 3 Sekunden)
                </li>
                <li>
                  - Anti-Sublimation Eigenschaften: Die kurze Verarbeitungszeit
                  reduziert die Sublimation-Tinten-Wanderung
                </li>
                <li>- 95 µm für eine sehr gute Opazität</li>
                <li>- Keine Verbrennungen und Plattenabdrücke</li>
                <li>- Weiche, angenehme textile Haptik</li>
                <li>- Übereinander verpressbar</li>
                <li>- Exzellente Waschbarkeit bis 60 °C</li>
                <li>- Kann mit Lasergeräten geschnitten werden</li>
                <li>
                  - Zertifiziert nach OEKO-TEX® Standard 100, Produktklasse 1
                </li>
                <li>- Vegan PO-TU-</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8">
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Eigenschaften
            </h2>

            <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
              {[
                ["Ausführung:", "Flex"],
                [
                  "Einsatzgebiet:",
                  "BW/PES-Mischgewebe, Polyester, Sportbekleidung",
                ],
                ["Farbe:", selectedColor.name],
                ["Materialzusammensetzung:", "PU"],
                ["Produktdetails:", "Standard, Metallic & Neon"],
                ["Reinigung:", "Waschbar bis 60 °C"],
                ["Stärke:", "95 µ"],
                ["Zertifizierung:", "ÖKOTEX Standard 100"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[180px_1fr] gap-4 py-4 text-sm"
                >
                  <div className="font-semibold text-zinc-900">{label}</div>
                  <div className="text-zinc-700">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
