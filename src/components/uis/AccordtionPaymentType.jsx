"use client"
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { FaChevronDown } from "react-icons/fa";
import clsx from 'clsx'

const AccordtionPaymentType = ({items}) => {


    return (
        <Accordion.Root
            type="single"
            collapsible
            className="w-full rounded-xl border text-black shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-700"
        >
            {items.map(({ value, question, answer }) => (
                <Accordion.Item
                    key={value}
                    value={value}
                    className="border-b last:border-none dark:border-zinc-700 text-black"
                >
                    <Accordion.Header>
                        <Accordion.Trigger
                            className={clsx(
                                'group',
                                'flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium',
                                'hover:bg-gray-50 dark:hover:bg-zinc-800',
                                'transition-all duration-300',
                                'focus:outline-none text-black'
                            )}
                        >
                            {question}
                            <FaChevronDown
                                className="h-5 w-5 transform transition-transform duration-300 group-data-[state=open]:rotate-180 text-black"
                            />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content
                        className={clsx(
                            'px-4 pb-4 pt-1 text-sm text-black overflow-hidden',
                            'transition-all duration-600',
                            'data-[state=open]:animate-slideDown',
                            'data-[state=closed]:animate-slideUp'
                        )}
                    >
                        {answer}
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    )
}

export default AccordtionPaymentType
