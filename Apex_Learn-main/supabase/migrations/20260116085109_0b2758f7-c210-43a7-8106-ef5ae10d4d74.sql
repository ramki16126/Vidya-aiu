-- Create enum for student categories
CREATE TYPE public.student_category AS ENUM ('JEE', 'NEET', 'BTECH');

-- Create profiles table for additional user information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  category student_category,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category student_category NOT NULL,
  description TEXT,
  resource_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on courses
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Courses are publicly readable for authenticated users
CREATE POLICY "Authenticated users can view courses"
  ON public.courses FOR SELECT
  TO authenticated
  USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Function to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', 'Student'));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Insert sample courses
INSERT INTO public.courses (title, category, description, resource_link) VALUES
  ('Physics Fundamentals', 'JEE', 'Master the basics of mechanics, thermodynamics, and electromagnetism for JEE preparation.', 'https://example.com/physics-jee'),
  ('Advanced Mathematics', 'JEE', 'Comprehensive guide to calculus, algebra, and coordinate geometry.', 'https://example.com/math-jee'),
  ('Chemistry Essentials', 'JEE', 'Organic, inorganic, and physical chemistry concepts explained.', 'https://example.com/chemistry-jee'),
  ('Biology Complete Guide', 'NEET', 'From cell biology to human physiology - complete NEET biology prep.', 'https://example.com/biology-neet'),
  ('Physics for NEET', 'NEET', 'Physics concepts tailored for medical entrance examinations.', 'https://example.com/physics-neet'),
  ('Chemistry for NEET', 'NEET', 'Comprehensive chemistry preparation for NEET aspirants.', 'https://example.com/chemistry-neet'),
  ('Data Structures & Algorithms', 'BTECH', 'Master DSA concepts with practical coding examples.', 'https://example.com/dsa-btech'),
  ('Computer Networks', 'BTECH', 'Understanding network protocols, architecture, and security.', 'https://example.com/networks-btech'),
  ('Database Management', 'BTECH', 'SQL, NoSQL, and database design principles.', 'https://example.com/dbms-btech');