import { supabase } from './src/integrations/supabase/client';

/**
 * Script to update Google Drive links for JEE and NEET courses
 * Run this with: npm run dev (in another terminal) and then: node --loader tsx update-drive-links.ts
 * Or use: npx tsx update-drive-links.ts
 */

async function updateDriveLinks() {
  console.log('Starting to update Google Drive links...\n');

  try {
    // Update Mathematics (JEE)
    const { data: mathData, error: mathError } = await supabase
      .from('courses')
      .update({ resource_link: 'https://drive.google.com/drive/folders/1Vi8kfOFDCJgeBWVoRyzvYpdt-aTvphx0' })
      .eq('title', 'Advanced Mathematics')
      .eq('category', 'JEE')
      .select();

    if (mathError) {
      console.error('Error updating Mathematics:', mathError);
    } else {
      console.log('✓ Updated Mathematics (JEE) link');
    }

    // Update Physics (JEE)
    const { data: physicsData, error: physicsError } = await supabase
      .from('courses')
      .update({ resource_link: 'https://drive.google.com/drive/folders/1cyTxIhaU0OD7cflVpE5xBNYkmGcKi__d' })
      .eq('title', 'Physics Fundamentals')
      .eq('category', 'JEE')
      .select();

    if (physicsError) {
      console.error('Error updating Physics:', physicsError);
    } else {
      console.log('✓ Updated Physics (JEE) link');
    }

    // Update Chemistry (JEE)
    const { data: chemistryData, error: chemistryError } = await supabase
      .from('courses')
      .update({ resource_link: 'https://drive.google.com/drive/folders/1WN97A1tJCR5lE7MvqJQqCugx9_Bj4xgg' })
      .eq('title', 'Chemistry Essentials')
      .eq('category', 'JEE')
      .select();

    if (chemistryError) {
      console.error('Error updating Chemistry:', chemistryError);
    } else {
      console.log('✓ Updated Chemistry (JEE) link');
    }

    // Update Biology (NEET)
    const { data: biologyData, error: biologyError } = await supabase
      .from('courses')
      .update({ resource_link: 'https://drive.google.com/drive/folders/1xU-RBTR_CCn-p5kg9k_4HG6IrWp_jcKQ' })
      .eq('title', 'Biology Complete Guide')
      .eq('category', 'NEET')
      .select();

    if (biologyError) {
      console.error('Error updating Biology:', biologyError);
    } else {
      console.log('✓ Updated Biology (NEET) link');
    }

    console.log('\n✅ All Google Drive links have been updated successfully!');
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

updateDriveLinks();
