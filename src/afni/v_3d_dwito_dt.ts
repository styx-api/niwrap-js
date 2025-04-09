// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_DWITO_DT_METADATA: Metadata = {
    id: "9a917bfe0fc87dc6e13908baec1679a6c7340c54.boutiques",
    name: "3dDWItoDT",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dDwitoDtParameters {
    "__STYXTYPE__": "3dDWItoDT";
    "gradient_file": InputPathType;
    "dataset": InputPathType;
    "prefix"?: string | null | undefined;
    "automask": boolean;
    "mask"?: InputPathType | null | undefined;
    "bmatrix_NZ"?: InputPathType | null | undefined;
    "bmatrix_Z"?: InputPathType | null | undefined;
    "bmatrix_FULL"?: InputPathType | null | undefined;
    "scale_out_1000": boolean;
    "bmax_ref"?: number | null | undefined;
    "nonlinear": boolean;
    "linear": boolean;
    "reweight": boolean;
    "max_iter"?: number | null | undefined;
    "max_iter_rw"?: number | null | undefined;
    "eigs": boolean;
    "debug_briks": boolean;
    "cumulative_wts": boolean;
    "verbose"?: number | null | undefined;
    "drive_afni"?: number | null | undefined;
    "sep_dsets": boolean;
    "csf_val"?: number | null | undefined;
    "min_bad_md"?: number | null | undefined;
    "csf_fa"?: number | null | undefined;
    "opt"?: string | null | undefined;
    "mean_b0": boolean;
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
        "3dDWItoDT": v_3d_dwito_dt_cargs,
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
        "3dDWItoDT": v_3d_dwito_dt_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_dwito_dt(...)`.
 *
 * @interface
 */
interface V3dDwitoDtOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset
     */
    output_dataset: OutputPathType;
}


function v_3d_dwito_dt_params(
    gradient_file: InputPathType,
    dataset: InputPathType,
    prefix: string | null = null,
    automask: boolean = false,
    mask: InputPathType | null = null,
    bmatrix_nz: InputPathType | null = null,
    bmatrix_z: InputPathType | null = null,
    bmatrix_full: InputPathType | null = null,
    scale_out_1000: boolean = false,
    bmax_ref: number | null = null,
    nonlinear: boolean = false,
    linear: boolean = false,
    reweight: boolean = false,
    max_iter: number | null = null,
    max_iter_rw: number | null = null,
    eigs: boolean = false,
    debug_briks: boolean = false,
    cumulative_wts: boolean = false,
    verbose: number | null = null,
    drive_afni: number | null = null,
    sep_dsets: boolean = false,
    csf_val: number | null = null,
    min_bad_md: number | null = null,
    csf_fa: number | null = null,
    opt: string | null = null,
    mean_b0: boolean = false,
): V3dDwitoDtParameters {
    /**
     * Build parameters.
    
     * @param gradient_file A 1D file of the gradient vectors with lines of ASCII floats (Gxi, Gyi, Gzi) or a 1D file of b-matrix elements.
     * @param dataset A 3D bucket dataset with Np+1 sub-briks where the first sub-brik is the volume acquired with no diffusion weighting.
     * @param prefix Output dataset prefix name. Default is 'DT'.
     * @param automask Mask dataset so that tensors are computed only for high-intensity (presumably brain) voxels.
     * @param mask Use this dataset as mask to include/exclude voxels.
     * @param bmatrix_nz Input dataset is b-matrix, not gradient directions, and there is no row of zeros at the top of the file.
     * @param bmatrix_z Similar to '-bmatrix_NZ' but first row of the file is all zeros.
     * @param bmatrix_full Same as '-bmatrix_Z' but with a more intuitive name.
     * @param scale_out_1000 Increase output parameters with physical units by multiplying them by 1000.
     * @param bmax_ref Flag the reference b-value if it is greater than zero.
     * @param nonlinear Compute iterative solution to avoid negative eigenvalues. This is the default method.
     * @param linear Compute simple linear solution.
     * @param reweight Recompute weight factors at end of iterations and restart.
     * @param max_iter Maximum number of iterations for convergence. Default is 10.
     * @param max_iter_rw Max number of iterations after reweighting. Default is 5.
     * @param eigs Compute eigenvalues, eigenvectors, fractional anisotropy, and mean diffusivity in sub-briks 6-19.
     * @param debug_briks Add sub-briks with error functional, original error, number of steps to convergence, and modeled B0 volume.
     * @param cumulative_wts Show overall weight factors for each gradient level.
     * @param verbose Print convergence steps every nnnnn voxels.
     * @param drive_afni Show convergence graphs every nnnnn voxels. AFNI must have NIML communications on.
     * @param sep_dsets Save tensor, eigenvalues, vectors, FA, MD in separate datasets.
     * @param csf_val Assign diffusivity value to DWI data where the mean values for b=0 volumes is less than the mean of the remaining volumes at each voxel.
     * @param min_bad_md Change the min MD value used as a 'badness check' for tensor fits.
     * @param csf_fa Assign a specific FA value to CSF voxels.
     * @param opt Optimization method: 'powell', 'gradient', or 'hybrid'.
     * @param mean_b0 Use mean of all b=0 volumes for linear computation and initial linear for nonlinear method.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dDWItoDT" as const,
        "gradient_file": gradient_file,
        "dataset": dataset,
        "automask": automask,
        "scale_out_1000": scale_out_1000,
        "nonlinear": nonlinear,
        "linear": linear,
        "reweight": reweight,
        "eigs": eigs,
        "debug_briks": debug_briks,
        "cumulative_wts": cumulative_wts,
        "sep_dsets": sep_dsets,
        "mean_b0": mean_b0,
    };
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (bmatrix_nz !== null) {
        params["bmatrix_NZ"] = bmatrix_nz;
    }
    if (bmatrix_z !== null) {
        params["bmatrix_Z"] = bmatrix_z;
    }
    if (bmatrix_full !== null) {
        params["bmatrix_FULL"] = bmatrix_full;
    }
    if (bmax_ref !== null) {
        params["bmax_ref"] = bmax_ref;
    }
    if (max_iter !== null) {
        params["max_iter"] = max_iter;
    }
    if (max_iter_rw !== null) {
        params["max_iter_rw"] = max_iter_rw;
    }
    if (verbose !== null) {
        params["verbose"] = verbose;
    }
    if (drive_afni !== null) {
        params["drive_afni"] = drive_afni;
    }
    if (csf_val !== null) {
        params["csf_val"] = csf_val;
    }
    if (min_bad_md !== null) {
        params["min_bad_md"] = min_bad_md;
    }
    if (csf_fa !== null) {
        params["csf_fa"] = csf_fa;
    }
    if (opt !== null) {
        params["opt"] = opt;
    }
    return params;
}


function v_3d_dwito_dt_cargs(
    params: V3dDwitoDtParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dDWItoDT");
    cargs.push(execution.inputFile((params["gradient_file"] ?? null)));
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["bmatrix_NZ"] ?? null) !== null) {
        cargs.push(
            "-bmatrix_NZ",
            execution.inputFile((params["bmatrix_NZ"] ?? null))
        );
    }
    if ((params["bmatrix_Z"] ?? null) !== null) {
        cargs.push(
            "-bmatrix_Z",
            execution.inputFile((params["bmatrix_Z"] ?? null))
        );
    }
    if ((params["bmatrix_FULL"] ?? null) !== null) {
        cargs.push(
            "-bmatrix_FULL",
            execution.inputFile((params["bmatrix_FULL"] ?? null))
        );
    }
    if ((params["scale_out_1000"] ?? null)) {
        cargs.push("-scale_out_1000");
    }
    if ((params["bmax_ref"] ?? null) !== null) {
        cargs.push(
            "-bmax_ref",
            String((params["bmax_ref"] ?? null))
        );
    }
    if ((params["nonlinear"] ?? null)) {
        cargs.push("-nonlinear");
    }
    if ((params["linear"] ?? null)) {
        cargs.push("-linear");
    }
    if ((params["reweight"] ?? null)) {
        cargs.push("-reweight");
    }
    if ((params["max_iter"] ?? null) !== null) {
        cargs.push(
            "-max_iter",
            String((params["max_iter"] ?? null))
        );
    }
    if ((params["max_iter_rw"] ?? null) !== null) {
        cargs.push(
            "-max_iter_rw",
            String((params["max_iter_rw"] ?? null))
        );
    }
    if ((params["eigs"] ?? null)) {
        cargs.push("-eigs");
    }
    if ((params["debug_briks"] ?? null)) {
        cargs.push("-debug_briks");
    }
    if ((params["cumulative_wts"] ?? null)) {
        cargs.push("-cumulative_wts");
    }
    if ((params["verbose"] ?? null) !== null) {
        cargs.push(
            "-verbose",
            String((params["verbose"] ?? null))
        );
    }
    if ((params["drive_afni"] ?? null) !== null) {
        cargs.push(
            "-drive_afni",
            String((params["drive_afni"] ?? null))
        );
    }
    if ((params["sep_dsets"] ?? null)) {
        cargs.push("-sep_dsets");
    }
    if ((params["csf_val"] ?? null) !== null) {
        cargs.push(
            "-csf_val",
            String((params["csf_val"] ?? null))
        );
    }
    if ((params["min_bad_md"] ?? null) !== null) {
        cargs.push(
            "-min_bad_md",
            String((params["min_bad_md"] ?? null))
        );
    }
    if ((params["csf_fa"] ?? null) !== null) {
        cargs.push(
            "-csf_fa",
            String((params["csf_fa"] ?? null))
        );
    }
    if ((params["opt"] ?? null) !== null) {
        cargs.push(
            "-opt",
            (params["opt"] ?? null)
        );
    }
    if ((params["mean_b0"] ?? null)) {
        cargs.push("-mean_b0");
    }
    return cargs;
}


function v_3d_dwito_dt_outputs(
    params: V3dDwitoDtParameters,
    execution: Execution,
): V3dDwitoDtOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dDwitoDtOutputs = {
        root: execution.outputFile("."),
        output_dataset: execution.outputFile(["<PREFIX>.*"].join('')),
    };
    return ret;
}


function v_3d_dwito_dt_execute(
    params: V3dDwitoDtParameters,
    execution: Execution,
): V3dDwitoDtOutputs {
    /**
     * Computes 6 principal direction tensors from multiple gradient vectors and corresponding DTI image volumes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dDwitoDtOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_dwito_dt_cargs(params, execution)
    const ret = v_3d_dwito_dt_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_dwito_dt(
    gradient_file: InputPathType,
    dataset: InputPathType,
    prefix: string | null = null,
    automask: boolean = false,
    mask: InputPathType | null = null,
    bmatrix_nz: InputPathType | null = null,
    bmatrix_z: InputPathType | null = null,
    bmatrix_full: InputPathType | null = null,
    scale_out_1000: boolean = false,
    bmax_ref: number | null = null,
    nonlinear: boolean = false,
    linear: boolean = false,
    reweight: boolean = false,
    max_iter: number | null = null,
    max_iter_rw: number | null = null,
    eigs: boolean = false,
    debug_briks: boolean = false,
    cumulative_wts: boolean = false,
    verbose: number | null = null,
    drive_afni: number | null = null,
    sep_dsets: boolean = false,
    csf_val: number | null = null,
    min_bad_md: number | null = null,
    csf_fa: number | null = null,
    opt: string | null = null,
    mean_b0: boolean = false,
    runner: Runner | null = null,
): V3dDwitoDtOutputs {
    /**
     * Computes 6 principal direction tensors from multiple gradient vectors and corresponding DTI image volumes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param gradient_file A 1D file of the gradient vectors with lines of ASCII floats (Gxi, Gyi, Gzi) or a 1D file of b-matrix elements.
     * @param dataset A 3D bucket dataset with Np+1 sub-briks where the first sub-brik is the volume acquired with no diffusion weighting.
     * @param prefix Output dataset prefix name. Default is 'DT'.
     * @param automask Mask dataset so that tensors are computed only for high-intensity (presumably brain) voxels.
     * @param mask Use this dataset as mask to include/exclude voxels.
     * @param bmatrix_nz Input dataset is b-matrix, not gradient directions, and there is no row of zeros at the top of the file.
     * @param bmatrix_z Similar to '-bmatrix_NZ' but first row of the file is all zeros.
     * @param bmatrix_full Same as '-bmatrix_Z' but with a more intuitive name.
     * @param scale_out_1000 Increase output parameters with physical units by multiplying them by 1000.
     * @param bmax_ref Flag the reference b-value if it is greater than zero.
     * @param nonlinear Compute iterative solution to avoid negative eigenvalues. This is the default method.
     * @param linear Compute simple linear solution.
     * @param reweight Recompute weight factors at end of iterations and restart.
     * @param max_iter Maximum number of iterations for convergence. Default is 10.
     * @param max_iter_rw Max number of iterations after reweighting. Default is 5.
     * @param eigs Compute eigenvalues, eigenvectors, fractional anisotropy, and mean diffusivity in sub-briks 6-19.
     * @param debug_briks Add sub-briks with error functional, original error, number of steps to convergence, and modeled B0 volume.
     * @param cumulative_wts Show overall weight factors for each gradient level.
     * @param verbose Print convergence steps every nnnnn voxels.
     * @param drive_afni Show convergence graphs every nnnnn voxels. AFNI must have NIML communications on.
     * @param sep_dsets Save tensor, eigenvalues, vectors, FA, MD in separate datasets.
     * @param csf_val Assign diffusivity value to DWI data where the mean values for b=0 volumes is less than the mean of the remaining volumes at each voxel.
     * @param min_bad_md Change the min MD value used as a 'badness check' for tensor fits.
     * @param csf_fa Assign a specific FA value to CSF voxels.
     * @param opt Optimization method: 'powell', 'gradient', or 'hybrid'.
     * @param mean_b0 Use mean of all b=0 volumes for linear computation and initial linear for nonlinear method.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dDwitoDtOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_DWITO_DT_METADATA);
    const params = v_3d_dwito_dt_params(gradient_file, dataset, prefix, automask, mask, bmatrix_nz, bmatrix_z, bmatrix_full, scale_out_1000, bmax_ref, nonlinear, linear, reweight, max_iter, max_iter_rw, eigs, debug_briks, cumulative_wts, verbose, drive_afni, sep_dsets, csf_val, min_bad_md, csf_fa, opt, mean_b0)
    return v_3d_dwito_dt_execute(params, execution);
}


export {
      V3dDwitoDtOutputs,
      V3dDwitoDtParameters,
      V_3D_DWITO_DT_METADATA,
      v_3d_dwito_dt,
      v_3d_dwito_dt_params,
};
