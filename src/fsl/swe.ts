// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SWE_METADATA: Metadata = {
    id: "b97bfd942ff64a502f393d83c41edeb1f7f94667.boutiques",
    name: "swe",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface SweParameters {
    "__STYXTYPE__": "swe";
    "input_file": InputPathType;
    "output_root": string;
    "design_mat": InputPathType;
    "design_con": InputPathType;
    "design_sub": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "fcon"?: InputPathType | null | undefined;
    "modified": boolean;
    "wild_bootstrap": boolean;
    "logp": boolean;
    "nboot"?: number | null | undefined;
    "corrp": boolean;
    "fonly": boolean;
    "tfce": boolean;
    "tfce_2d": boolean;
    "cluster_t"?: number | null | undefined;
    "cluster_t_mass"?: number | null | undefined;
    "cluster_f"?: number | null | undefined;
    "cluster_f_mass"?: number | null | undefined;
    "quiet": boolean;
    "raw": boolean;
    "equiv": boolean;
    "dof": boolean;
    "uncorr_p": boolean;
    "null_dist": boolean;
    "no_rc_mask": boolean;
    "seed"?: number | null | undefined;
    "tfce_h"?: number | null | undefined;
    "tfce_d"?: number | null | undefined;
    "tfce_e"?: number | null | undefined;
    "tfce_c"?: number | null | undefined;
    "voxelwise_ev"?: Array<number> | null | undefined;
    "voxelwise_evs"?: Array<InputPathType> | null | undefined;
    "glm_output": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "swe": swe_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "swe": swe_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `swe(...)`.
 *
 * @interface
 */
interface SweOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output -log_10(p) images
     */
    logp_img: OutputPathType;
    /**
     * Output voxel-corrected p-value images
     */
    corrp_img: OutputPathType;
    /**
     * Output raw voxelwise statistic images
     */
    raw_img: OutputPathType;
    /**
     * Output equivalent z or chi-squared statistic images
     */
    equiv_img: OutputPathType;
    /**
     * Output effective number of degrees of freedom images
     */
    dof_img: OutputPathType;
    /**
     * Output uncorrected p-value images
     */
    uncorrp_img: OutputPathType;
    /**
     * Output null distribution text files
     */
    null_dist_file: OutputPathType;
    /**
     * Output GLM information (pe, cope, & varcope)
     */
    glm_output_file: OutputPathType;
}


function swe_params(
    input_file: InputPathType,
    output_root: string,
    design_mat: InputPathType,
    design_con: InputPathType,
    design_sub: InputPathType,
    mask: InputPathType | null = null,
    fcon: InputPathType | null = null,
    modified: boolean = false,
    wild_bootstrap: boolean = false,
    logp: boolean = false,
    nboot: number | null = 999,
    corrp: boolean = false,
    fonly: boolean = false,
    tfce: boolean = false,
    tfce_2d: boolean = false,
    cluster_t: number | null = null,
    cluster_t_mass: number | null = null,
    cluster_f: number | null = null,
    cluster_f_mass: number | null = null,
    quiet: boolean = false,
    raw: boolean = false,
    equiv: boolean = false,
    dof: boolean = false,
    uncorr_p: boolean = false,
    null_dist: boolean = false,
    no_rc_mask: boolean = false,
    seed: number | null = null,
    tfce_h: number | null = 2,
    tfce_d: number | null = null,
    tfce_e: number | null = 0.5,
    tfce_c: number | null = 6,
    voxelwise_ev: Array<number> | null = null,
    voxelwise_evs: Array<InputPathType> | null = null,
    glm_output: boolean = false,
): SweParameters {
    /**
     * Build parameters.
    
     * @param input_file 4D input image
     * @param output_root Output file root name
     * @param design_mat Design matrix file
     * @param design_con T contrasts file
     * @param design_sub Subjects file
     * @param mask Mask image
     * @param fcon F contrasts file
     * @param modified Use the modified 'Homogeneous' SwE instead of the classic 'Heterogeneous' SwE
     * @param wild_bootstrap Inference using a non-parametric Wild Bootstrap procedure
     * @param logp Return -log_10(p) images instead of 1-p images
     * @param nboot Number of bootstraps (default 999)
     * @param corrp Output voxelwise corrected p-value images
     * @param fonly Calculate f-statistics only
     * @param tfce Threshold-Free Cluster Enhancement
     * @param tfce_2d Threshold-Free Cluster Enhancement with 2D optimisation, e.g. for TBSS data (H=2, E=1, C=26)
     * @param cluster_t Cluster-extent-based inference for t-contrasts with specified cluster-forming threshold (z-score if >= 1, uncorrected p-value if < 1)
     * @param cluster_t_mass Cluster-mass-based inference for t-contrasts with specified cluster-forming threshold (z-score if >= 1, uncorrected p-value if < 1)
     * @param cluster_f Cluster-extent-based inference for f-contrasts with specified cluster-forming threshold (chi-squared-score if >= 1, uncorrected p-value if < 1)
     * @param cluster_f_mass Cluster-mass-based inference for f-contrasts with specified cluster-forming threshold (chi-squared-score if >= 1, uncorrected p-value if < 1)
     * @param quiet Switch off diagnostic messages
     * @param raw Output raw voxelwise statistic images
     * @param equiv Output equivalent z or chi-squared statistic images
     * @param dof Output effective number of degrees of freedom images
     * @param uncorr_p Output uncorrected p-value images
     * @param null_dist Output null distribution text files
     * @param no_rc_mask Don't remove constant voxels from mask
     * @param seed Specific integer seed for random number generator
     * @param tfce_h TFCE height parameter (default=2)
     * @param tfce_d TFCE delta parameter override
     * @param tfce_e TFCE extent parameter (default=0.5)
     * @param tfce_c TFCE connectivity (6 or 26; default=6)
     * @param voxelwise_ev List of numbers indicating voxelwise EVs position in the design matrix
     * @param voxelwise_evs List of 4D images containing voxelwise EVs
     * @param glm_output Output GLM information (pe, cope, & varcope)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "swe" as const,
        "input_file": input_file,
        "output_root": output_root,
        "design_mat": design_mat,
        "design_con": design_con,
        "design_sub": design_sub,
        "modified": modified,
        "wild_bootstrap": wild_bootstrap,
        "logp": logp,
        "corrp": corrp,
        "fonly": fonly,
        "tfce": tfce,
        "tfce_2d": tfce_2d,
        "quiet": quiet,
        "raw": raw,
        "equiv": equiv,
        "dof": dof,
        "uncorr_p": uncorr_p,
        "null_dist": null_dist,
        "no_rc_mask": no_rc_mask,
        "glm_output": glm_output,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (fcon !== null) {
        params["fcon"] = fcon;
    }
    if (nboot !== null) {
        params["nboot"] = nboot;
    }
    if (cluster_t !== null) {
        params["cluster_t"] = cluster_t;
    }
    if (cluster_t_mass !== null) {
        params["cluster_t_mass"] = cluster_t_mass;
    }
    if (cluster_f !== null) {
        params["cluster_f"] = cluster_f;
    }
    if (cluster_f_mass !== null) {
        params["cluster_f_mass"] = cluster_f_mass;
    }
    if (seed !== null) {
        params["seed"] = seed;
    }
    if (tfce_h !== null) {
        params["tfce_h"] = tfce_h;
    }
    if (tfce_d !== null) {
        params["tfce_d"] = tfce_d;
    }
    if (tfce_e !== null) {
        params["tfce_e"] = tfce_e;
    }
    if (tfce_c !== null) {
        params["tfce_c"] = tfce_c;
    }
    if (voxelwise_ev !== null) {
        params["voxelwise_ev"] = voxelwise_ev;
    }
    if (voxelwise_evs !== null) {
        params["voxelwise_evs"] = voxelwise_evs;
    }
    return params;
}


function swe_cargs(
    params: SweParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("swe");
    cargs.push(
        "-i",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_root"] ?? null)
    );
    cargs.push(
        "-d",
        execution.inputFile((params["design_mat"] ?? null))
    );
    cargs.push(
        "-t",
        execution.inputFile((params["design_con"] ?? null))
    );
    cargs.push(
        "-s",
        execution.inputFile((params["design_sub"] ?? null))
    );
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["fcon"] ?? null) !== null) {
        cargs.push(
            "-f",
            execution.inputFile((params["fcon"] ?? null))
        );
    }
    if ((params["modified"] ?? null)) {
        cargs.push("--modified");
    }
    if ((params["wild_bootstrap"] ?? null)) {
        cargs.push("--wb");
    }
    if ((params["logp"] ?? null)) {
        cargs.push("--logp");
    }
    if ((params["nboot"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["nboot"] ?? null))
        );
    }
    if ((params["corrp"] ?? null)) {
        cargs.push("-x");
    }
    if ((params["fonly"] ?? null)) {
        cargs.push("--fonly");
    }
    if ((params["tfce"] ?? null)) {
        cargs.push("-T");
    }
    if ((params["tfce_2d"] ?? null)) {
        cargs.push("--T2");
    }
    if ((params["cluster_t"] ?? null) !== null) {
        cargs.push(
            "-c",
            String((params["cluster_t"] ?? null))
        );
    }
    if ((params["cluster_t_mass"] ?? null) !== null) {
        cargs.push(
            "-C",
            String((params["cluster_t_mass"] ?? null))
        );
    }
    if ((params["cluster_f"] ?? null) !== null) {
        cargs.push(
            "-F",
            String((params["cluster_f"] ?? null))
        );
    }
    if ((params["cluster_f_mass"] ?? null) !== null) {
        cargs.push(
            "-S",
            String((params["cluster_f_mass"] ?? null))
        );
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("--quiet");
    }
    if ((params["raw"] ?? null)) {
        cargs.push("-R");
    }
    if ((params["equiv"] ?? null)) {
        cargs.push("-E");
    }
    if ((params["dof"] ?? null)) {
        cargs.push("-D");
    }
    if ((params["uncorr_p"] ?? null)) {
        cargs.push("--uncorrp");
    }
    if ((params["null_dist"] ?? null)) {
        cargs.push("-N");
    }
    if ((params["no_rc_mask"] ?? null)) {
        cargs.push("--norcmask");
    }
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "--seed",
            String((params["seed"] ?? null))
        );
    }
    if ((params["tfce_h"] ?? null) !== null) {
        cargs.push(
            "--tfce_H",
            String((params["tfce_h"] ?? null))
        );
    }
    if ((params["tfce_d"] ?? null) !== null) {
        cargs.push(
            "--tfce_D",
            String((params["tfce_d"] ?? null))
        );
    }
    if ((params["tfce_e"] ?? null) !== null) {
        cargs.push(
            "--tfce_E",
            String((params["tfce_e"] ?? null))
        );
    }
    if ((params["tfce_c"] ?? null) !== null) {
        cargs.push(
            "--tfce_C",
            String((params["tfce_c"] ?? null))
        );
    }
    if ((params["voxelwise_ev"] ?? null) !== null) {
        cargs.push(
            "--vxl",
            ...(params["voxelwise_ev"] ?? null).map(String)
        );
    }
    if ((params["voxelwise_evs"] ?? null) !== null) {
        cargs.push(
            "--vxf",
            ...(params["voxelwise_evs"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["glm_output"] ?? null)) {
        cargs.push("--glm_output");
    }
    return cargs;
}


function swe_outputs(
    params: SweParameters,
    execution: Execution,
): SweOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SweOutputs = {
        root: execution.outputFile("."),
        logp_img: execution.outputFile([(params["output_root"] ?? null), "_logp.nii.gz"].join('')),
        corrp_img: execution.outputFile([(params["output_root"] ?? null), "_corrp.nii.gz"].join('')),
        raw_img: execution.outputFile([(params["output_root"] ?? null), "_raw.nii.gz"].join('')),
        equiv_img: execution.outputFile([(params["output_root"] ?? null), "_equiv.nii.gz"].join('')),
        dof_img: execution.outputFile([(params["output_root"] ?? null), "_dof.nii.gz"].join('')),
        uncorrp_img: execution.outputFile([(params["output_root"] ?? null), "_uncorrp.nii.gz"].join('')),
        null_dist_file: execution.outputFile([(params["output_root"] ?? null), "_null_dist.txt"].join('')),
        glm_output_file: execution.outputFile([(params["output_root"] ?? null), "_glm.nii.gz"].join('')),
    };
    return ret;
}


function swe_execute(
    params: SweParameters,
    execution: Execution,
): SweOutputs {
    /**
     * SwE (summary statistics and voxelwise statistical analyses tool for FSL).
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SweOutputs`).
     */
    params = execution.params(params)
    const cargs = swe_cargs(params, execution)
    const ret = swe_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function swe(
    input_file: InputPathType,
    output_root: string,
    design_mat: InputPathType,
    design_con: InputPathType,
    design_sub: InputPathType,
    mask: InputPathType | null = null,
    fcon: InputPathType | null = null,
    modified: boolean = false,
    wild_bootstrap: boolean = false,
    logp: boolean = false,
    nboot: number | null = 999,
    corrp: boolean = false,
    fonly: boolean = false,
    tfce: boolean = false,
    tfce_2d: boolean = false,
    cluster_t: number | null = null,
    cluster_t_mass: number | null = null,
    cluster_f: number | null = null,
    cluster_f_mass: number | null = null,
    quiet: boolean = false,
    raw: boolean = false,
    equiv: boolean = false,
    dof: boolean = false,
    uncorr_p: boolean = false,
    null_dist: boolean = false,
    no_rc_mask: boolean = false,
    seed: number | null = null,
    tfce_h: number | null = 2,
    tfce_d: number | null = null,
    tfce_e: number | null = 0.5,
    tfce_c: number | null = 6,
    voxelwise_ev: Array<number> | null = null,
    voxelwise_evs: Array<InputPathType> | null = null,
    glm_output: boolean = false,
    runner: Runner | null = null,
): SweOutputs {
    /**
     * SwE (summary statistics and voxelwise statistical analyses tool for FSL).
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file 4D input image
     * @param output_root Output file root name
     * @param design_mat Design matrix file
     * @param design_con T contrasts file
     * @param design_sub Subjects file
     * @param mask Mask image
     * @param fcon F contrasts file
     * @param modified Use the modified 'Homogeneous' SwE instead of the classic 'Heterogeneous' SwE
     * @param wild_bootstrap Inference using a non-parametric Wild Bootstrap procedure
     * @param logp Return -log_10(p) images instead of 1-p images
     * @param nboot Number of bootstraps (default 999)
     * @param corrp Output voxelwise corrected p-value images
     * @param fonly Calculate f-statistics only
     * @param tfce Threshold-Free Cluster Enhancement
     * @param tfce_2d Threshold-Free Cluster Enhancement with 2D optimisation, e.g. for TBSS data (H=2, E=1, C=26)
     * @param cluster_t Cluster-extent-based inference for t-contrasts with specified cluster-forming threshold (z-score if >= 1, uncorrected p-value if < 1)
     * @param cluster_t_mass Cluster-mass-based inference for t-contrasts with specified cluster-forming threshold (z-score if >= 1, uncorrected p-value if < 1)
     * @param cluster_f Cluster-extent-based inference for f-contrasts with specified cluster-forming threshold (chi-squared-score if >= 1, uncorrected p-value if < 1)
     * @param cluster_f_mass Cluster-mass-based inference for f-contrasts with specified cluster-forming threshold (chi-squared-score if >= 1, uncorrected p-value if < 1)
     * @param quiet Switch off diagnostic messages
     * @param raw Output raw voxelwise statistic images
     * @param equiv Output equivalent z or chi-squared statistic images
     * @param dof Output effective number of degrees of freedom images
     * @param uncorr_p Output uncorrected p-value images
     * @param null_dist Output null distribution text files
     * @param no_rc_mask Don't remove constant voxels from mask
     * @param seed Specific integer seed for random number generator
     * @param tfce_h TFCE height parameter (default=2)
     * @param tfce_d TFCE delta parameter override
     * @param tfce_e TFCE extent parameter (default=0.5)
     * @param tfce_c TFCE connectivity (6 or 26; default=6)
     * @param voxelwise_ev List of numbers indicating voxelwise EVs position in the design matrix
     * @param voxelwise_evs List of 4D images containing voxelwise EVs
     * @param glm_output Output GLM information (pe, cope, & varcope)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SweOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SWE_METADATA);
    const params = swe_params(input_file, output_root, design_mat, design_con, design_sub, mask, fcon, modified, wild_bootstrap, logp, nboot, corrp, fonly, tfce, tfce_2d, cluster_t, cluster_t_mass, cluster_f, cluster_f_mass, quiet, raw, equiv, dof, uncorr_p, null_dist, no_rc_mask, seed, tfce_h, tfce_d, tfce_e, tfce_c, voxelwise_ev, voxelwise_evs, glm_output)
    return swe_execute(params, execution);
}


export {
      SWE_METADATA,
      SweOutputs,
      SweParameters,
      swe,
      swe_params,
};
