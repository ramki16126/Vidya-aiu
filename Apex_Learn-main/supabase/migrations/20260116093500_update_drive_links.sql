-- Update Google Drive links for JEE and NEET subjects

-- Update JEE subjects with Google Drive links
UPDATE public.courses
SET resource_link = 'https://drive.google.com/drive/folders/1Vi8kfOFDCJgeBWVoRyzvYpdt-aTvphx0'
WHERE title = 'Advanced Mathematics' AND category = 'JEE';

UPDATE public.courses
SET resource_link = 'https://drive.google.com/drive/folders/1cyTxIhaU0OD7cflVpE5xBNYkmGcKi__d'
WHERE title = 'Physics Fundamentals' AND category = 'JEE';

UPDATE public.courses
SET resource_link = 'https://drive.google.com/drive/folders/1WN97A1tJCR5lE7MvqJQqCugx9_Bj4xgg'
WHERE title = 'Chemistry Essentials' AND category = 'JEE';

-- Update NEET Biology with Google Drive link
UPDATE public.courses
SET resource_link = 'https://drive.google.com/drive/folders/1xU-RBTR_CCn-p5kg9k_4HG6IrWp_jcKQ'
WHERE title = 'Biology Complete Guide' AND category = 'NEET';
