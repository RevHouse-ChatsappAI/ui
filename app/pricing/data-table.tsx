
import { Profile } from '@/types/profile'
import React from 'react'
import { CardPrice } from './components/CardPrice'
import Stripe from 'stripe';
import { pricingFeatures } from '@/config/pricing';


async function loadPrices() {
  const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error('Stripe secret key is undefined.');
  }
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2023-08-16'
  });
  const prices = await stripe.prices.list({
    product: 'prod_PQlBLHxNozr0nS'
  });
  console.log(prices)
  const sortedPrices = prices.data.sort((a, b) => {
    const unitAmountA = a.unit_amount || 0;
    const unitAmountB = b.unit_amount || 0;
    return unitAmountA - unitAmountB;
  });

  return sortedPrices;
}


export const DataTable = async () => {

  const prices = await loadPrices()

  return (
    <div className='space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10'>
      {
        prices.map(price => (
          <CardPrice
            key={price.id}
            priceId={price.id}
            title={price?.nickname || ''}
            nickname={price?.nickname || ''}
            description={price.unit_amount === 0 ? 'Explora nuestros servicios con el Plan Gratis, ¡perfecto para empezar!' : (price.unit_amount || 0) < 78900 ? 'Desbloquea más características con el Plan Estándar, ideal para negocios en crecimiento!' : '¡Experimenta la suite completa con nuestro Plan Premium, diseñado para escalar!'}
            price={price?.unit_amount ? `$${price.unit_amount / 100}` : 'Free'}
            features={price.unit_amount === 0 ? pricingFeatures.free : (price.unit_amount || 0) < 78900 ? pricingFeatures.standard : pricingFeatures.premiun}
            buttonLink='/sigup'
          />
        ))
      }
    </div>
  )
}

