-- First, enable Row Level Security on the table
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;

-- Create policy for SELECT operations (read)
CREATE POLICY "Users can view their own entries" ON journal_entries
    FOR SELECT
    USING (auth.uid() = profile_id);

-- Create policy for INSERT operations (create)
CREATE POLICY "Users can create their own entries" ON journal_entries
    FOR INSERT
    WITH CHECK (auth.uid() = profile_id);

-- Create policy for UPDATE operations
CREATE POLICY "Users can update their own entries" ON journal_entries
    FOR UPDATE
    USING (auth.uid() = profile_id)
    WITH CHECK (auth.uid() = profile_id);

-- Create policy for DELETE operations
CREATE POLICY "Users can delete their own entries" ON journal_entries
    FOR DELETE
    USING (auth.uid() = profile_id);

-- Verify existing policies
SELECT *
FROM pg_policies
WHERE tablename = 'journal_entries';

-- Remove a policy if needed (example)
-- DROP POLICY "Policy Name" ON journal_entries;
