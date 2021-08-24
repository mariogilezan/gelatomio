import React from "react"
import {
  PricingHeading,
  PricingTable,
  PricingTableBody,
  PricingTableHeader,
  PricingWrapper,
} from "./Pricing.elements"
import products from "./products"

export default function PricingSection() {
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
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.item}</td>
              <td>{product.amount}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </PricingTableBody>
      </PricingTable>
    </PricingWrapper>
  )
}
