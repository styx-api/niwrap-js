// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const EPI_B0_CORRECT_METADATA: Metadata = {
    id: "a6677e9e92afc1f84d2e14c41fd7dc5daf44fd9c.boutiques",
    name: "epi_b0_correct",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface EpiB0CorrectParameters {
    "__STYXTYPE__": "epi_b0_correct";
    "prefix": string;
    "input_freq": InputPathType;
    "input_epi": InputPathType;
    "input_mask"?: InputPathType | null | undefined;
    "input_magn"?: InputPathType | null | undefined;
    "input_anat"?: InputPathType | null | undefined;
    "input_json"?: InputPathType | null | undefined;
    "epi_pe_dir": string;
    "epi_pe_bwpp"?: number | null | undefined;
    "epi_pe_echo_sp"?: number | null | undefined;
    "epi_pe_vox_dim"?: number | null | undefined;
    "scale_freq"?: number | null | undefined;
    "out_cmds"?: string | null | undefined;
    "out_pars"?: string | null | undefined;
    "wdir_name"?: string | null | undefined;
    "blur_sigma"?: number | null | undefined;
    "do_recenter_freq"?: string | null | undefined;
    "mask_dilate"?: Array<number> | null | undefined;
    "no_clean": boolean;
    "qc_box_focus_ulay": boolean;
    "no_qc_image": boolean;
    "help": boolean;
    "ver": boolean;
    "date": boolean;
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
        "epi_b0_correct": epi_b0_correct_cargs,
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
        "epi_b0_correct": epi_b0_correct_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `epi_b0_correct(...)`.
 *
 * @interface
 */
interface EpiB0CorrectOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Warp dataset containing the warp along the phase encode axis.
     */
    warp_dset: OutputPathType;
    /**
     * Script of the commands used to generate the warp and process the EPI.
     */
    cmds_script: OutputPathType;
    /**
     * Text file of parameters input or derived from datasets.
     */
    params_txt: OutputPathType;
    /**
     * EPI dataset with estimated distortion correction applied.
     */
    unwarped_epi: OutputPathType;
    /**
     * Directory containing QC images.
     */
    qc_image_dir: OutputPathType;
}


function epi_b0_correct_params(
    prefix: string,
    input_freq: InputPathType,
    input_epi: InputPathType,
    epi_pe_dir: string,
    input_mask: InputPathType | null = null,
    input_magn: InputPathType | null = null,
    input_anat: InputPathType | null = null,
    input_json: InputPathType | null = null,
    epi_pe_bwpp: number | null = null,
    epi_pe_echo_sp: number | null = null,
    epi_pe_vox_dim: number | null = null,
    scale_freq: number | null = null,
    out_cmds: string | null = null,
    out_pars: string | null = null,
    wdir_name: string | null = null,
    blur_sigma: number | null = null,
    do_recenter_freq: string | null = null,
    mask_dilate: Array<number> | null = null,
    no_clean: boolean = false,
    qc_box_focus_ulay: boolean = false,
    no_qc_image: boolean = false,
    help: boolean = false,
    ver: boolean = false,
    date: boolean = false,
): EpiB0CorrectParameters {
    /**
     * Build parameters.
    
     * @param prefix Prefix of output files; can include path.
     * @param input_freq Phase dataset (frequency volume); should be at similar resolution and FOV as the EPI dataset; must be scaled appropriately.
     * @param input_epi EPI dataset to which B0 distortion correction will be applied.
     * @param epi_pe_dir Direction (axis) of phase encoding, e.g., AP, PA, RL, ...
     * @param input_mask Mask of brain volume.
     * @param input_magn Magnitude dataset from which to estimate brain mask; can be used for QC imaging.
     * @param input_anat Anatomical dataset to be used as underlay for QC images (optional).
     * @param input_json JSON file containing parameters about the EPI dataset.
     * @param epi_pe_bwpp Bandwidth per pixel (in Hz) in the EPI dataset along the phase encode direction.
     * @param epi_pe_echo_sp Effective TE spacing of the phase encoded volume, in seconds.
     * @param epi_pe_vox_dim Voxel size along the EPI dataset's phase encode axis, in mm.
     * @param scale_freq Scale to apply to frequency volume to match units (def: SF=1.0).
     * @param out_cmds Name for output script recording commands (def: PREFIX_cmds.tcsh).
     * @param out_pars Name for output text file recording relevant parameters (def: PREFIX_pars.txt).
     * @param wdir_name Working directory name (def: automatic name).
     * @param blur_sigma Amount of blurring to apply to masked phase encode dataset (def: BS=9).
     * @param do_recenter_freq Method to recenter the phase volume within the brain mask (def: MC=mode).
     * @param mask_dilate Erosion and dilation parameters for automask (when using magnitude image).
     * @param no_clean Don't remove the temporary directory of intermediate files.
     * @param qc_box_focus_ulay Focus the QC images on an automask region of the underlay dataset.
     * @param no_qc_image Don't generate QC images.
     * @param help Display program help in terminal.
     * @param ver Display program version number in terminal.
     * @param date Display date of program's last update in terminal.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "epi_b0_correct" as const,
        "prefix": prefix,
        "input_freq": input_freq,
        "input_epi": input_epi,
        "epi_pe_dir": epi_pe_dir,
        "no_clean": no_clean,
        "qc_box_focus_ulay": qc_box_focus_ulay,
        "no_qc_image": no_qc_image,
        "help": help,
        "ver": ver,
        "date": date,
    };
    if (input_mask !== null) {
        params["input_mask"] = input_mask;
    }
    if (input_magn !== null) {
        params["input_magn"] = input_magn;
    }
    if (input_anat !== null) {
        params["input_anat"] = input_anat;
    }
    if (input_json !== null) {
        params["input_json"] = input_json;
    }
    if (epi_pe_bwpp !== null) {
        params["epi_pe_bwpp"] = epi_pe_bwpp;
    }
    if (epi_pe_echo_sp !== null) {
        params["epi_pe_echo_sp"] = epi_pe_echo_sp;
    }
    if (epi_pe_vox_dim !== null) {
        params["epi_pe_vox_dim"] = epi_pe_vox_dim;
    }
    if (scale_freq !== null) {
        params["scale_freq"] = scale_freq;
    }
    if (out_cmds !== null) {
        params["out_cmds"] = out_cmds;
    }
    if (out_pars !== null) {
        params["out_pars"] = out_pars;
    }
    if (wdir_name !== null) {
        params["wdir_name"] = wdir_name;
    }
    if (blur_sigma !== null) {
        params["blur_sigma"] = blur_sigma;
    }
    if (do_recenter_freq !== null) {
        params["do_recenter_freq"] = do_recenter_freq;
    }
    if (mask_dilate !== null) {
        params["mask_dilate"] = mask_dilate;
    }
    return params;
}


function epi_b0_correct_cargs(
    params: EpiB0CorrectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("epi_b0_correct.py");
    cargs.push((params["prefix"] ?? null));
    cargs.push(
        "-in_freq",
        execution.inputFile((params["input_freq"] ?? null))
    );
    cargs.push(
        "-in_epi",
        execution.inputFile((params["input_epi"] ?? null))
    );
    if ((params["input_mask"] ?? null) !== null) {
        cargs.push(
            "-in_mask",
            execution.inputFile((params["input_mask"] ?? null))
        );
    }
    if ((params["input_magn"] ?? null) !== null) {
        cargs.push(
            "-in_magn",
            execution.inputFile((params["input_magn"] ?? null))
        );
    }
    if ((params["input_anat"] ?? null) !== null) {
        cargs.push(
            "-in_anat",
            execution.inputFile((params["input_anat"] ?? null))
        );
    }
    if ((params["input_json"] ?? null) !== null) {
        cargs.push(
            "-in_epi_json",
            execution.inputFile((params["input_json"] ?? null))
        );
    }
    cargs.push(
        "-epi_pe_dir",
        (params["epi_pe_dir"] ?? null)
    );
    if ((params["epi_pe_bwpp"] ?? null) !== null) {
        cargs.push(
            "-epi_pe_bwpp",
            String((params["epi_pe_bwpp"] ?? null))
        );
    }
    if ((params["epi_pe_echo_sp"] ?? null) !== null) {
        cargs.push(
            "-epi_pe_echo_sp",
            String((params["epi_pe_echo_sp"] ?? null))
        );
    }
    if ((params["epi_pe_vox_dim"] ?? null) !== null) {
        cargs.push(
            "-epi_pe_voxdim",
            String((params["epi_pe_vox_dim"] ?? null))
        );
    }
    if ((params["scale_freq"] ?? null) !== null) {
        cargs.push(
            "-scale_freq",
            String((params["scale_freq"] ?? null))
        );
    }
    if ((params["out_cmds"] ?? null) !== null) {
        cargs.push(
            "-out_cmds",
            (params["out_cmds"] ?? null)
        );
    }
    if ((params["out_pars"] ?? null) !== null) {
        cargs.push(
            "-out_pars",
            (params["out_pars"] ?? null)
        );
    }
    if ((params["wdir_name"] ?? null) !== null) {
        cargs.push(
            "-wdir_name",
            (params["wdir_name"] ?? null)
        );
    }
    if ((params["blur_sigma"] ?? null) !== null) {
        cargs.push(
            "-blur_sigma",
            String((params["blur_sigma"] ?? null))
        );
    }
    if ((params["do_recenter_freq"] ?? null) !== null) {
        cargs.push(
            "-do_recenter_freq",
            (params["do_recenter_freq"] ?? null)
        );
    }
    if ((params["mask_dilate"] ?? null) !== null) {
        cargs.push(
            "-mask_dilate",
            ...(params["mask_dilate"] ?? null).map(String)
        );
    }
    if ((params["no_clean"] ?? null)) {
        cargs.push("-no_clean");
    }
    if ((params["qc_box_focus_ulay"] ?? null)) {
        cargs.push("-qc_box_focus_ulay");
    }
    if ((params["no_qc_image"] ?? null)) {
        cargs.push("-no_qc_image");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["ver"] ?? null)) {
        cargs.push("-ver");
    }
    if ((params["date"] ?? null)) {
        cargs.push("-date");
    }
    return cargs;
}


function epi_b0_correct_outputs(
    params: EpiB0CorrectParameters,
    execution: Execution,
): EpiB0CorrectOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: EpiB0CorrectOutputs = {
        root: execution.outputFile("."),
        warp_dset: execution.outputFile([(params["prefix"] ?? null), "_WARP.nii.gz"].join('')),
        cmds_script: execution.outputFile([(params["prefix"] ?? null), "_cmds.tcsh"].join('')),
        params_txt: execution.outputFile([(params["prefix"] ?? null), "_pars.txt"].join('')),
        unwarped_epi: execution.outputFile([(params["prefix"] ?? null), "_unwarped.nii.gz"].join('')),
        qc_image_dir: execution.outputFile([(params["prefix"] ?? null), "_QC/"].join('')),
    };
    return ret;
}


function epi_b0_correct_execute(
    params: EpiB0CorrectParameters,
    execution: Execution,
): EpiB0CorrectOutputs {
    /**
     * B0 distortion correction tool using an acquired frequency (phase) image.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `EpiB0CorrectOutputs`).
     */
    params = execution.params(params)
    const cargs = epi_b0_correct_cargs(params, execution)
    const ret = epi_b0_correct_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function epi_b0_correct(
    prefix: string,
    input_freq: InputPathType,
    input_epi: InputPathType,
    epi_pe_dir: string,
    input_mask: InputPathType | null = null,
    input_magn: InputPathType | null = null,
    input_anat: InputPathType | null = null,
    input_json: InputPathType | null = null,
    epi_pe_bwpp: number | null = null,
    epi_pe_echo_sp: number | null = null,
    epi_pe_vox_dim: number | null = null,
    scale_freq: number | null = null,
    out_cmds: string | null = null,
    out_pars: string | null = null,
    wdir_name: string | null = null,
    blur_sigma: number | null = null,
    do_recenter_freq: string | null = null,
    mask_dilate: Array<number> | null = null,
    no_clean: boolean = false,
    qc_box_focus_ulay: boolean = false,
    no_qc_image: boolean = false,
    help: boolean = false,
    ver: boolean = false,
    date: boolean = false,
    runner: Runner | null = null,
): EpiB0CorrectOutputs {
    /**
     * B0 distortion correction tool using an acquired frequency (phase) image.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Prefix of output files; can include path.
     * @param input_freq Phase dataset (frequency volume); should be at similar resolution and FOV as the EPI dataset; must be scaled appropriately.
     * @param input_epi EPI dataset to which B0 distortion correction will be applied.
     * @param epi_pe_dir Direction (axis) of phase encoding, e.g., AP, PA, RL, ...
     * @param input_mask Mask of brain volume.
     * @param input_magn Magnitude dataset from which to estimate brain mask; can be used for QC imaging.
     * @param input_anat Anatomical dataset to be used as underlay for QC images (optional).
     * @param input_json JSON file containing parameters about the EPI dataset.
     * @param epi_pe_bwpp Bandwidth per pixel (in Hz) in the EPI dataset along the phase encode direction.
     * @param epi_pe_echo_sp Effective TE spacing of the phase encoded volume, in seconds.
     * @param epi_pe_vox_dim Voxel size along the EPI dataset's phase encode axis, in mm.
     * @param scale_freq Scale to apply to frequency volume to match units (def: SF=1.0).
     * @param out_cmds Name for output script recording commands (def: PREFIX_cmds.tcsh).
     * @param out_pars Name for output text file recording relevant parameters (def: PREFIX_pars.txt).
     * @param wdir_name Working directory name (def: automatic name).
     * @param blur_sigma Amount of blurring to apply to masked phase encode dataset (def: BS=9).
     * @param do_recenter_freq Method to recenter the phase volume within the brain mask (def: MC=mode).
     * @param mask_dilate Erosion and dilation parameters for automask (when using magnitude image).
     * @param no_clean Don't remove the temporary directory of intermediate files.
     * @param qc_box_focus_ulay Focus the QC images on an automask region of the underlay dataset.
     * @param no_qc_image Don't generate QC images.
     * @param help Display program help in terminal.
     * @param ver Display program version number in terminal.
     * @param date Display date of program's last update in terminal.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `EpiB0CorrectOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(EPI_B0_CORRECT_METADATA);
    const params = epi_b0_correct_params(prefix, input_freq, input_epi, epi_pe_dir, input_mask, input_magn, input_anat, input_json, epi_pe_bwpp, epi_pe_echo_sp, epi_pe_vox_dim, scale_freq, out_cmds, out_pars, wdir_name, blur_sigma, do_recenter_freq, mask_dilate, no_clean, qc_box_focus_ulay, no_qc_image, help, ver, date)
    return epi_b0_correct_execute(params, execution);
}


export {
      EPI_B0_CORRECT_METADATA,
      EpiB0CorrectOutputs,
      EpiB0CorrectParameters,
      epi_b0_correct,
      epi_b0_correct_params,
};
