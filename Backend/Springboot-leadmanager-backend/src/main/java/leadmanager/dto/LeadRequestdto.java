package leadmanager.dto;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import leadmanager.Entity.LeadStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LeadRequestdto {
	
	@NotBlank(message = "Name is required")
	@Size(max = 100, message = "Name cannot exceed 100 characters")
    private String name;
	
	@NotBlank(message = "Email is required")
	@Email(message = "Please enter a valid email address")
	private String email;
	
	@NotBlank(message = "Phone is required")
	@Pattern(regexp = "^[0-9]{10}$",
	         message = "Phone must contain exactly 10 digits")
	private String phone;
	
	@NotBlank(message = "Company is required")
	private String company;
	
	@NotBlank(message = "Source is required")
	private String source;
    
	@NotNull(message = "Status is required")
    private LeadStatus status;
}
