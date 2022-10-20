package com.example.backend.Company;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/company")
@AllArgsConstructor
@RestController
public class CompanyController {

    private final CompanyService companyService;

    @PostMapping
    public void addCompany(@RequestBody CompanyModel companyModel){
        companyService.addCompany(companyModel);
    }

    @GetMapping("/getAllCompanies")
    public List<CompanyModel> getAllCompanies(){
        return companyService.getAllCompanies();
    }

    @DeleteMapping("/deleteAllCompanies")
    public void deleteAllCompanies(){
        companyService.deleteAllCompanies();
    }


}
