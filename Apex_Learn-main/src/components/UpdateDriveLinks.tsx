import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Temporary component to update Google Drive links
 * Add this to your app temporarily and click the button to update the database
 */
const UpdateDriveLinks = () => {
    const [status, setStatus] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const updateLinks = async () => {
        setLoading(true);
        setStatus('Updating links...\n');

        try {
            // Update Mathematics (JEE)
            const { error: mathError } = await supabase
                .from('courses')
                .update({ resource_link: 'https://drive.google.com/drive/folders/1Vi8kfOFDCJgeBWVoRyzvYpdt-aTvphx0' })
                .eq('title', 'Advanced Mathematics')
                .eq('category', 'JEE');

            if (mathError) {
                setStatus(prev => prev + `❌ Error updating Mathematics: ${mathError.message}\n`);
            } else {
                setStatus(prev => prev + '✓ Updated Mathematics (JEE) link\n');
            }

            // Update Physics (JEE)
            const { error: physicsError } = await supabase
                .from('courses')
                .update({ resource_link: 'https://drive.google.com/drive/folders/1cyTxIhaU0OD7cflVpE5xBNYkmGcKi__d' })
                .eq('title', 'Physics Fundamentals')
                .eq('category', 'JEE');

            if (physicsError) {
                setStatus(prev => prev + `❌ Error updating Physics: ${physicsError.message}\n`);
            } else {
                setStatus(prev => prev + '✓ Updated Physics (JEE) link\n');
            }

            // Update Chemistry (JEE)
            const { error: chemistryError } = await supabase
                .from('courses')
                .update({ resource_link: 'https://drive.google.com/drive/folders/1WN97A1tJCR5lE7MvqJQqCugx9_Bj4xgg' })
                .eq('title', 'Chemistry Essentials')
                .eq('category', 'JEE');

            if (chemistryError) {
                setStatus(prev => prev + `❌ Error updating Chemistry: ${chemistryError.message}\n`);
            } else {
                setStatus(prev => prev + '✓ Updated Chemistry (JEE) link\n');
            }

            // Update Biology (NEET)
            const { error: biologyError } = await supabase
                .from('courses')
                .update({ resource_link: 'https://drive.google.com/drive/folders/1xU-RBTR_CCn-p5kg9k_4HG6IrWp_jcKQ' })
                .eq('title', 'Biology Complete Guide')
                .eq('category', 'NEET');

            if (biologyError) {
                setStatus(prev => prev + `❌ Error updating Biology: ${biologyError.message}\n`);
            } else {
                setStatus(prev => prev + '✓ Updated Biology (NEET) link\n');
            }

            setStatus(prev => prev + '\n✅ All Google Drive links have been updated successfully!');
        } catch (error) {
            setStatus(prev => prev + `\n❌ Unexpected error: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="max-w-2xl mx-auto mt-8">
            <CardHeader>
                <CardTitle>Update Google Drive Links</CardTitle>
                <CardDescription>
                    Click the button below to update the Google Drive links for JEE and NEET subjects
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={updateLinks} disabled={loading} className="mb-4">
                    {loading ? 'Updating...' : 'Update Drive Links'}
                </Button>
                {status && (
                    <pre className="bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap">
                        {status}
                    </pre>
                )}
            </CardContent>
        </Card>
    );
};

export default UpdateDriveLinks;
