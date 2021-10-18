import React from "react"
import {
  PricingHeading,
  PricingTable,
  PricingTableBody,
  PricingTableHeader,
  PricingWrapper,
} from "./PricingElements"

export default function PricingSection({ data }) {
  return (
    <PricingWrapper>
      <PricingHeading>Cenovnik</PricingHeading>
      <PricingTable>
        <PricingTableHeader>
          <tr>
            <th>Proizvod</th>
            <th>Količina</th>
            <th>Cena</th>
          </tr>
        </PricingTableHeader>
        <PricingTableBody>
          {data.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>{product.amount}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </PricingTableBody>
      </PricingTable>
    </PricingWrapper>
  )
}
