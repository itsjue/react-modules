
import { Accordion, Span } from "@chakra-ui/react"

export const FAQprovider = () => {
    const items = [
        { value: "a",
          title: "Q: What makes XYZ Company's products so unique?", 
          text: "A: At XYZ Company, we pride ourselves on innovation and cutting-edge technology. Our products are crafted with a perfect blend of creativity and functionality, setting them apart from the competition. We constantly strive to push the boundaries of what 's possible to deliver a truly exceptional user experience." 
        },
        { value: "b",title: "Q: How does XYZ Company contribute to sustainability and environmental conservation?", text: "A: XYZ Company is committed to environmental responsibility. We implement eco-friendly practices throughout our production process, from sourcing materials to manufacturing. Our dedication to sustainability extends beyond our products, as we actively engage in initiatives to reduce our carbon footprint and promote a greener future." },
        { value: "c",title: "Q: Can you tell us about XYZ Company's commitment to community involvement?", text: "A: XYZ Company is deeply committed to giving back to the communities we serve. We actively engage in philanthropic initiatives, supporting local charities and community projects. Additionally, we encourage our employees to participate in volunteer programs, fostering a culture of social responsibility. By being actively involved in the community, we aim to make a positive impact beyond the products and services we offer." },
      ]
  return (
    <div>
    <h1> FAQ (คำถามที่พบบ่อย) </h1>
    <Accordion.Root multiple defaultValue={["a"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
    </div>
  )
}


