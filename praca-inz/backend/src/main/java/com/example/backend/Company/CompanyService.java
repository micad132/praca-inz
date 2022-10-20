package com.example.backend.Company;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CompanyService {

    private final CompanyRepository companyRepository;

    public void addCompany(CompanyModel companyModel){
        companyRepository.save(companyModel);
    }

    public List<CompanyModel> getAllCompanies(){
        return companyRepository.findAll();
    }

    public void deleteAllCompanies(){
        companyRepository.deleteAll();
    }
}
