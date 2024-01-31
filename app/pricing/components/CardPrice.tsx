import React from "react"

import { ButtonPrice } from "./ButtonPrice"
import { CalendarIcon } from "@/components/svg/CalendarIcon"

interface CardPriceProps {
  title: string
  description: string
  price: string | number
  features: string[]
  buttonLink: string
  priceId: string
  nickname: string
}

export const CardPrice: React.FC<CardPriceProps> = ({
  title,
  description,
  price,
  features,
  buttonLink,
  priceId,
  nickname,
}) => {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col justify-between rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow xl:p-8 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
      <div>
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="text-base font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="my-8 flex items-baseline justify-center">
          <span className="mr-2 text-5xl font-extrabold">{price}</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul role="list" className="mb-8 space-y-2 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        {nickname !== "FREE" && (
          <button
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow transition-all hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
          >
            <CalendarIcon/>
            <span>
              Agendar una llamada
            </span>
          </button>
        )}
        <ButtonPrice priceId={priceId} title="Asignar Pago" />
      </div>
    </div>
  )
}
