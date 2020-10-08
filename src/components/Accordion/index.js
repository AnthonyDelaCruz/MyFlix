import React, { useState } from "react";
import Accordion from "./Accordion";
import faqs from "static/fixtures/faq.json";
import { FaTimes, FaPlus } from "react-icons/fa";

const AccordionMain = () => {
  const [currentActiveItem, setCurrentActiveItem] = useState("");

  return (
    <Accordion>
      <h1>Frequently Asked Questions</h1>
      <Accordion.List>
        {faqs.map((faq, i) => {
          const isActive = currentActiveItem === i;
          return (
            <>
              <Accordion.Item
                margin={isActive ? 2 : 8}
                onClick={() => {
                  if (isActive) {
                    setCurrentActiveItem("");
                  } else {
                    setCurrentActiveItem(i);
                  }
                }}
              >
                <Accordion.Title>
                  {faq.title}{" "}
                  {isActive ? <FaTimes size={25} /> : <FaPlus size={25} />}
                </Accordion.Title>
              </Accordion.Item>
              {currentActiveItem === i && (
                <Accordion.Content>{faq.body}</Accordion.Content>
              )}
            </>
          );
        })}
      </Accordion.List>
    </Accordion>
  );
};

export default AccordionMain;
