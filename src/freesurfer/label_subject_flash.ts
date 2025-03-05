// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LABEL_SUBJECT_FLASH_METADATA: Metadata = {
    id: "6437bdd8443156c21638b016c6209131b9efc309.boutiques",
    name: "label_subject_flash",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface LabelSubjectFlashParameters {
    "__STYXTYPE__": "label_subject_flash";
    "tissue_params": InputPathType;
    "norm_volume": InputPathType;
    "transform_file": InputPathType;
    "classifier_array": InputPathType;
    "aseg_output": string;
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
        "label_subject_flash": label_subject_flash_cargs,
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
        "label_subject_flash": label_subject_flash_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `label_subject_flash(...)`.
 *
 * @interface
 */
interface LabelSubjectFlashOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Automatic segmentation (aseg) output file
     */
    aseg_outfile: OutputPathType;
}


function label_subject_flash_params(
    tissue_params: InputPathType,
    norm_volume: InputPathType,
    transform_file: InputPathType,
    classifier_array: InputPathType,
    aseg_output: string,
): LabelSubjectFlashParameters {
    /**
     * Build parameters.
    
     * @param tissue_params Path to the tissue parameter file for FLASH sequences.
     * @param norm_volume Path to the normalized T1 volume.
     * @param transform_file Talairach linear transform file.
     * @param classifier_array Path to the classifier array in GCA format.
     * @param aseg_output Output path for the automatic segmentation (aseg) file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label_subject_flash" as const,
        "tissue_params": tissue_params,
        "norm_volume": norm_volume,
        "transform_file": transform_file,
        "classifier_array": classifier_array,
        "aseg_output": aseg_output,
    };
    return params;
}


function label_subject_flash_cargs(
    params: LabelSubjectFlashParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_ca_label");
    cargs.push(
        "-flash",
        execution.inputFile((params["tissue_params"] ?? null))
    );
    cargs.push(execution.inputFile((params["norm_volume"] ?? null)));
    cargs.push(execution.inputFile((params["transform_file"] ?? null)));
    cargs.push(execution.inputFile((params["classifier_array"] ?? null)));
    cargs.push((params["aseg_output"] ?? null));
    return cargs;
}


function label_subject_flash_outputs(
    params: LabelSubjectFlashParameters,
    execution: Execution,
): LabelSubjectFlashOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LabelSubjectFlashOutputs = {
        root: execution.outputFile("."),
        aseg_outfile: execution.outputFile([(params["aseg_output"] ?? null)].join('')),
    };
    return ret;
}


function label_subject_flash_execute(
    params: LabelSubjectFlashParameters,
    execution: Execution,
): LabelSubjectFlashOutputs {
    /**
     * A tool for labeling brain structures in an MRI dataset using FLASH sequences and the FreeSurfer software.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LabelSubjectFlashOutputs`).
     */
    params = execution.params(params)
    const cargs = label_subject_flash_cargs(params, execution)
    const ret = label_subject_flash_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function label_subject_flash(
    tissue_params: InputPathType,
    norm_volume: InputPathType,
    transform_file: InputPathType,
    classifier_array: InputPathType,
    aseg_output: string,
    runner: Runner | null = null,
): LabelSubjectFlashOutputs {
    /**
     * A tool for labeling brain structures in an MRI dataset using FLASH sequences and the FreeSurfer software.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param tissue_params Path to the tissue parameter file for FLASH sequences.
     * @param norm_volume Path to the normalized T1 volume.
     * @param transform_file Talairach linear transform file.
     * @param classifier_array Path to the classifier array in GCA format.
     * @param aseg_output Output path for the automatic segmentation (aseg) file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LabelSubjectFlashOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LABEL_SUBJECT_FLASH_METADATA);
    const params = label_subject_flash_params(tissue_params, norm_volume, transform_file, classifier_array, aseg_output)
    return label_subject_flash_execute(params, execution);
}


export {
      LABEL_SUBJECT_FLASH_METADATA,
      LabelSubjectFlashOutputs,
      LabelSubjectFlashParameters,
      label_subject_flash,
      label_subject_flash_params,
};
