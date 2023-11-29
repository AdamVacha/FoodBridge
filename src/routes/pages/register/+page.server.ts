import prisma from '$lib/prisma';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
	create: async ({ request }) => {
		try {
			// populate db
			const form = await request.formData();
			const email = form.get('email') as string;
			const name = form.get('username') as string;
			// grab result of the radio input
			const profileType = form.get('role') as string;

			//create user & profile in db
			const user = await prisma.user.create({
				data: {
					email,
					name,
					Profile: {
						create: {
							profileType
						}
					}
				}
			});

			// Return a success response
			console.log('Success');
			throw redirect(302, '/pages/donor-profile/dashboard');
		} catch (error) {
			console.error('Error processing form:', error);

			// Return an error response
			return {
				status: 500,
				body: { error: 'Error submitting form' }
			};
		}
	}
} satisfies Actions;
