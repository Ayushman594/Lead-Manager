package leadmanager.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import leadmanager.Entity.Lead;
import leadmanager.Entity.LeadStatus;

@Repository
public interface LeadRepo extends JpaRepository<Lead,Integer>{
	List<Lead> findByNameContainingIgnoreCase(String name);
	
	List<Lead> findByStatus(LeadStatus status);
}
