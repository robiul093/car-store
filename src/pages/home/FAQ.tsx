import { useState } from 'react';
import faqImg from '../../../public/assets/faqImg.png';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqItems = [
        {
            question: 'How can I buy a car from your website?',
            answer: 'To buy a car, browse our inventory online, select your preferred vehicle, apply for financing, schedule a test drive, and complete the purchase. Choose delivery or pick up directly from our dealership.'
        },
        {
            question: 'What are the rental terms for cars?',
            answer: 'Our car rental terms include flexible rental periods (daily, weekly, or monthly), insurance options, mileage limits, and security deposits. Prices vary based on the car type and rental duration.'
        },
        {
            question: 'Do you offer financing options?',
            answer: 'Yes, we offer flexible financing options tailored to your budget. Whether you have good or bad credit, we provide competitive rates and payment plans to help make your car purchase easier.'
        },
        {
            question: 'Can I test drive a car before purchasing?',
            answer: 'Yes, absolutely! You can schedule a test drive for any vehicle you\'re interested in. Simply book it online or contact us, and we’ll have the car ready for you.'
        },
        {
            question: 'Can I extend my car rental period?',
            answer: 'Yes, you can extend your car rental period. Simply contact us before your rental period ends to arrange an extension. Additional charges may apply depending on the extended duration.'
        }
    ];

    return (
        <div className=" md:px-14 my-20 items-center">
            <div className=" text-start">
                <h2 className="text-3xl md:text-4xl mb-10">Frequently Asked <br /> <span className="text-[#c7b933]">Questions</span></h2>

            </div>

            <div className='md:flex items-center gap-6'>
                <div className='w-full md:w-[40%] h-full p-3 border-3 border-gray-700 rounded-xl inline-block'>
                    <div className='w-full h-full'>
                        <img
                            className='w-full h-full rounded-3xl box-border'
                            src={faqImg}
                            alt=""
                        />
                    </div>
                </div>

                <div className="w-full md:w-[60%] text-start">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`collapse border border-base-300 relative my-2  ${openIndex === index
                                ? 'bg-[#03995B] text-white'
                                : 'bg-base-100'
                                }`}
                        >
                            <input
                                type="radio"
                                name="my-accordion-2"
                                checked={openIndex === index}
                                onChange={() => setOpenIndex(index)}
                                className="collapse-toggle"
                            />
                            <div className={`collapse-title font-semibold pr-10 ${openIndex !== index ? 'bg-gray-300' : ''}`}>
                                {item.question}
                                {/* Custom Arrow Icon */}
                                <div className={`absolute right-4 top-4 transition-transform duration-300 ${openIndex === index ? 'rotate-90 bg-[#03995B] text-white rounded-full' : 'rotate-0 text-[#03995B] bg-white rounded-full'
                                    }`}>
                                    <BsArrowUpRightCircleFill className="w-7 h-7  border-0 outline-0" />
                                </div>
                            </div>
                            <div className="collapse-content text-current">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}