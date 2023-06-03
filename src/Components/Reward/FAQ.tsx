import React from 'react'

function FAQ() {
  return (
    <section className='mx-[7%] sm:mx-[10%] pt-9'>
        <h1 className='text-[red] mb-4 text-center font-[700] text-[24px] sm:text-[30px] lg:text-[60px]'>REVVI REWARDS <span className='text-black'>FAQs</span></h1>

        <div className='border border-zinc-400 text-zinc-600 px-6 pt-6 pb-2'>
            <div className='mb-5'>
                <h4 className='text-black font-[700] mb-6 text-[15px]'>How do I apply for Revvi Rewards?</h4>
                <p>Apply for a Revvi Visa account today and start earning 1% cash back based on payments that you make to your Revvi account. After opening your account, you are automatically enrolled in Revvi Rewards and can begin redeeming accrued points after your account is active for 6 months.^^</p>
            </div>

            <div className='mb-5'>
                <h4 className='text-black font-[700] mb-6 text-[15px]'>How do I earn Revvi Rewards?</h4>
                <p>Rewards are earned by making payments to your Revvi Credit Card and are tracked as points. You will earn 1 point for every dollar of payment made to your account which equates to 1% cash back^^ in Revvi Rewards. Cash back is provided in the form of statement credits. Payments to the program fee or merchant credits/refunds to your account do not earn rewards.</p>
            </div>

            <div className='mb-5'>
                <h4 className='text-black font-[700] mb-6 text-[15px]'>How do I redeem Revvi Rewards?</h4>
                <p>Once your account is open for at least 6 months and remains in good standing, you can redeem your accrued rewards. Rewards can be redeemed online, via MyCCPay.com, Revvi Mobile App or by calling our friendly Revvi customer service team. Points can be redeemed in 500-point increments and will be applied as a credit to your card account. Each 500-point redemption will result in a $5 statement credit. Rewards redeemed as a statement credit to your Revvi account are applied to your outstanding account balance. You must still make regularly scheduled payments.^^</p>
            </div>

            <div className='mb-5'>
                <h4 className='text-black font-[700] mb-6 text-[15px]'>Will my Revvi Rewards expire?</h4>
                <p>Revvi Rewards do not expire and are good for the life of the account. However, if your account is closed for any reason, you will lose any unredeemed rewards.^^</p>
            </div>

        </div>
        <p className='my-9 text-[11.4px] leading-[19px] px-2 text-zinc-700'>^^1% cash back rewards provided on the amount of payments applied to your Credit Card. Rewards are earned and tracked as points and may be redeemed in the form of a statement credit. Your account must be in good standing at the time rewards are redeemed. Unredeemed reward points will be forfeited if your account is closed for any reason. Other terms, conditions, and limitations apply. See Revvi Rewards Program Terms & Conditions for details.</p>
    </section>
  )
}

export default FAQ