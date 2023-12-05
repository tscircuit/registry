"use client"
import { PackageInstallInstructions } from "./PackageInstallInstructions"
import { PCBViewer } from "@tscircuit/pcb-viewer"
import { Schematic } from "@tscircuit/schematic-viewer"
import { exampleSoupSchematic, exampleSoupPcb } from "./example-soup"
import "@tscircuit/react-fiber"

export const PackageSidebar = () => {
  const selectedInstallTarget = "Node"
  return (
    <div className="flex-grow flex-col" style={{ width: 500 }}>
      <PackageInstallInstructions />
      <div className="p-4">
        <div className="text-gray-500 text-sm font-semibold mb-2">
          Schematic
        </div>
        <div className="shadow-sm border border-gray-300">
          <Schematic soup={exampleSoupSchematic} showTable={false} />
        </div>
        <div className="text-gray-500 text-sm font-semibold mb-2 mt-4">PCB</div>
        <div className="shadow-md">
          <PCBViewer height={200}>
            <bug
              name="B1"
              port_arrangement={{ left_size: 3, right_size: 3 }}
              center={[0, 0]}
              footprint="sot236"
              port_labels={{
                1: "PWR",
                2: "NC",
                3: "RG",
                4: "D0",
                5: "D1",
                6: "GND",
              }}
            />
            <resistor
              x={2}
              y={-0.5}
              name="R1"
              resistance="10ohm"
              footprint="0805"
              pcb_x="4mm"
              pcb_y="-1mm"
            />
            <resistor
              x={-2}
              y={-0.5}
              name="R2"
              resistance="10ohm"
              footprint="0603"
              pcb_x="-4mm"
              pcb_y="-1mm"
            />
            <resistor
              x={-2}
              y={-0.5}
              name="R3"
              resistance="10ohm"
              footprint="0603"
              pcb_x="4mm"
              pcb_y="-4mm"
            />
            <ground x={3} y={1} name="GND" />
            <trace path={[".B1 > .D0", ".R1 > .left"]} />
            <trace path={[".B1 > .D1", ".R2 > .right"]} />
            <trace path={[".B1 > .RG", ".R3 > .left"]} />
            <trace path={[".R1 > .right", ".GND > .gnd"]} />
          </PCBViewer>
        </div>
      </div>
    </div>
  )
}
