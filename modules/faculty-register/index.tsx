import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { facultyRegistrationFormData } from './types';

const Faculty_Registration_Form = () => {
  const [formData, setFormData] = useState<facultyRegistrationFormData>({
    name: '',
    email: '',
    password: '',
    dept: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const handleDeptChange = (value: string) => {
    setFormData({
      ...formData,
      dept: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Faculty Data:', formData);
    setFormData({ name: '', email: '', password: '', dept: '' });
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-50'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-2xl shadow-lg w-96 space-y-5'
      >
        <h2 className='text-2xl font-semibold text-center'>
          Faculty Registration
        </h2>

        <div>
          <label className='block text-sm font-medium mb-1'>Faculty Name</label>
          <Input
            type='text'
            placeholder='Faculty Name'
            value={formData.name}
            onChange={handleChange('name')}
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Email</label>
          <Input
            type='email'
            placeholder='Faculty Email'
            value={formData.email}
            onChange={handleChange('email')}
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Department</label>
          <Select onValueChange={handleDeptChange} value={formData.dept}>
            <SelectTrigger>
              <SelectValue placeholder='Select Department' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='CSE'>CSE</SelectItem>
              <SelectItem value='IT'>IT</SelectItem>
              <SelectItem value='CSE-DS'>CSE-DS</SelectItem>
              <SelectItem value='CSIT'>CSIT</SelectItem>
              <SelectItem value='AIML'>AIML</SelectItem>
              <SelectItem value='CSE-CYBER'>CSE-CYBER</SelectItem>
              <SelectItem value='ECE'>ECE</SelectItem>
              <SelectItem value='ME'>ME</SelectItem>
              <SelectItem value='Civil'>Civil</SelectItem>
              <SelectItem value='MBA'>MBA</SelectItem>
              <SelectItem value='MCA'>MCA</SelectItem>
              <SelectItem value='FCA'>FCA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Password</label>
          <div className='relative'>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={formData.password}
              minLength={6}
              onChange={handleChange('password')}
              required
              className='pr-10'
            />
            <Button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              variant='ghost'
              size='icon'
              className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black'
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
        </div>

        <Button type='submit' className='w-full'>
          Add Faculty
        </Button>
      </form>
    </div>
  );
};

export default Faculty_Registration_Form;
